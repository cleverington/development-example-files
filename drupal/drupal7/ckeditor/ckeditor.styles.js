/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
 */

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
if(typeof(CKEDITOR) !== 'undefined') {
    CKEDITOR.addStylesSet( 'drupal',
        [
            /* Block Styles */

            /* Inline Styles */

            { name : 'Small'			, element : 'small' },
            { name : 'Computer Code'	, element : 'code' },

            { name : 'Cited Work'		, element : 'cite' },
            { name : 'Inline Quotation'	, element : 'q' },


            /* Object Styles */

            /* Features Customizations */
            {
                name : 'Button',
                element: ['a', 'h1', 'h2', 'h3', 'h4'],
                attributes :
                    {
                        'class' : 'button'
                    }
            },
            {
                name : 'Small Button',
                element: ['a', 'h1', 'h2', 'h3', 'h4'],
                attributes :
                    {
                        'class' : 'button small'
                    }
            },
            {
                name : 'Round Button',
                element: ['a', 'h1', 'h2', 'h3', 'h4'],
                attributes :
                    {
                        'class' : 'button round'
                    }
            },
            {
                name : 'Full-Width Button',
                element: ['a', 'h1', 'h2', 'h3', 'h4'],
                attributes :
                    {
                        'class' : 'button full-width'
                    }
            },
            /* General Customizations */

            /* Flex-Video Support */
            {
                name : 'Responsive Video',
                element : ['div' ],
                attributes :
                    {
                        'class' : 'flex-video small-12 medium-6 large-6'
                    }
            },

            /* Grid Support - <> DIV Box */

            {
                /* Full-width */
                name : 'Full-Width (small-12)',
                element: ['div' ],
                attributes :
                    {
                        'class' : 'small-12'
                    }
            },
            {
                /* Half-width */
                name : 'small-12 medium-6',
                element: ['div' ],
                attributes :
                    {
                        'class' : 'small-12 medium-6'
                    }
            },
            {
                /* One-third width */
                name : 'small-12 medium-4',
                element: ['div' ],
                attributes :
                    {
                        'class' : 'small-12 medium-4'
                    }
            },
            {
                /* One-fourth width */
                name : 'small-12 medium-3',
                element: ['div' ],
                attributes :
                    {
                        'class' : 'small-12 medium-3'
                    }
            },
            {
                /* Five-Seven */
                name : 'small-12 medium-5',
                element: ['div' ],
                attributes :
                    {
                        'class' : 'small-12 medium-5'
                    }
            },
            {
                /* Five-Seven */
                name : 'small-12 medium-7',
                element: ['div' ],
                attributes :
                    {
                        'class' : 'small-12 medium-7'
                    }
            },
            {
                /* Two-third width */
                name : 'small-12 medium-8',
                element: ['div' ],
                attributes :
                    {
                        'class' : 'small-12 medium-8'
                    }
            },
            {
                /* Large-up 3 */
                name : 'small-12 medium-4 large-3',
                element: ['div' ],
                attributes :
                    {
                        'class' : 'small-12 medium-4 large-3'
                    }
            }
        ]);
}