window.limbs = new function() {
    this.toggle = function( id ) {
        var
            el = document.getElementById(id),
            classes, classIndex;

        if ( el ) {
            if ( el.className.indexOf( "expanded" ) === -1 ) {
                el.className += " expanded";
            } else {
                classes = el.className.split( " " ),
                classIndex = classes.indexOf( "expanded" );

                if ( classIndex !== -1 ) {
                    classes.splice( classIndex, 1 );
                    el.className = classes.reduce( ( a, b ) => {
                        return a + " " + b;
                    }, "" );
                } else console.error( "Class does not contain 'expanded'. This shouldn't happen." );
            }
        } else console.error( "Error expanding. Element with id '" + id + "' does not exist." );
    }

}