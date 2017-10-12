function removeElement( el ) {
    if ( el ) el.parentNode.removeChild( el );
}

window.replaceScripts = function( type ) {
    var scripts = document.getElementsByTagName( "script" ),
    s, parent, pre, code, text, lines, indent;

    for ( s = 0; s < scripts.length; s ++ ) {
        if ( scripts[ s ].type === type ) {
            parent = scripts[ s ].parentNode;
            pre = document.createElement( "pre" );
            code = document.createElement( "code" );
            text = scripts[ s ].textContent;

            code.innerText = text;
            code.className = "language-markup";

            lines = code.getElementsByTagName( "br" );
            removeElement( lines[ 0 ] )
            removeElement( lines[ lines.length - 1 ] )

            pre.appendChild( code );
            parent.insertBefore( pre, scripts[ s ] );
        }
    }
}

Prism.hooks.add('before-highlight', function (env) {
    env.code = env.element.innerText;
});