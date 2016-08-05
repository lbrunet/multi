'use strict';

exports.config = {
  paths: {
    'public': 'web',
    'watched': ['app/Resources']
  },
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': /^(?!app)/,
      }
    },
    stylesheets: {
      joinTo: 'css/style.css'
    }
  },
  conventions: {
    ignored: [
      /\/_/, // File beginning by "_" like _settings.scss
      // Brunch does include all Bower components by default, we blacklist unneeded ones.
      //'bower_components/foundation/'
    ],
    assets: /^app\/Resources\/assets/
  },
  plugins: {
    babel: {
      presets: ["es2015", "stage-0"]
    },
    sass: {
      mode: 'native',
      allowCache: true,
      options: {
        includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
      },
      precision: 8 // minimum precision required by bootstrap-sass
    },
    copycat: {
      'fonts': ["node_modules/bootstrap-sass/assets/fonts/bootstrap"], // copy node_modules/bootstrap-sass/assets/fonts/bootstrap/* to web/fonts/
      onlyChanged: true
    },
    postcss: {
      processors: [
        require('autoprefixer')([
          // For compatibility requirements, see http://wiki.newtech.arte.tv/pages/viewpage.action?pageId=99060599
          'Explorer >= 9',
          'Firefox >= 34',
          'Chrome >= 39',
          'Safari >= 5',
          'Opera >= 9.5'
          // TODO Mobile device support
        ])
      ]
    },
    uglify: {
      mangle: true,
      compress: {
        global_defs: {
          DEBUG: false
        }
      }
    },
    cleancss: {
      keepSpecialComments: 0,
      removeEmpty: true
    }
  }
};
