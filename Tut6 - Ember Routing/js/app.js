// Generated by CoffeeScript 1.3.3
(function() {

  $(function() {
    var App;
    App = Em.Application.create();
    App.ApplicationController = Em.Controller.extend();
    App.ApplicationView = Em.View.extend({
      templateName: 'application'
    });
    App.LogoView = Em.View.extend({
      templateName: 'logo',
      classNames: ['logo']
    });
    App.TabView = Em.View.extend({
      templateName: 'tab',
      classNames: ['tabs']
    });
    App.TabsController = Em.Controller.extend();
    App.TabsView = Em.View.extend({
      templateName: 'tabs',
      classNames: ['tabs']
    });
    App.SliderView = Em.View.extend({
      templateName: 'slider',
      classNames: ['slider']
    });
    App.Tab1Controller = Em.Controller.extend();
    App.Tab1View = Em.View.extend({
      templateName: 'tab1',
      classNames: ['content']
    });
    App.Tab2Controller = Em.Controller.extend();
    App.Tab2View = Em.View.extend({
      templateName: 'tab2',
      classNames: ['content']
    });
    App.Tab3Controller = Em.Controller.extend();
    App.Tab3View = Em.View.extend({
      templateName: 'tab3',
      classNames: ['content']
    });
    App.Tab6Controller = Em.Controller.extend();
    App.Tab6View = Em.View.extend({
      templateName: 'tab6'
    });

    App.Tab4Controller = Em.Controller.extend();
    App.Tab4View = Em.View.extend({
      templateName: 'tab4',
      classNames: ['content']
    });
    App.Tab5Controller = Em.Controller.extend();
    App.Tab5View = Em.View.extend({
      templateName: 'tab5',
      classNames: ['content']
    });
    App.Router = Em.Router.extend({
      enableLogging: true,
      location: 'hash',
      root: Em.Route.extend({
        goToTab1: Ember.Route.transitionTo('tab1'),
        goToTab2: Ember.Route.transitionTo('tab2'),
        goToTab3: Ember.Route.transitionTo('tab3'),
        goToTab4: Ember.Route.transitionTo('tab4'),
        goToTab5: Ember.Route.transitionTo('tab5'),
        index: Em.Route.extend({
          route: '/',
          redirectsTo: 'tab1'
        }),
        tab1: Em.Route.extend({
          route: '/tab1',
          connectOutlets: function(router, context) {
            router.get('applicationController').connectOutlet({
              name: 'tab1',
              outletName:'one'
            });
          },
          enter: function() {
            return Em.run.next(function() {
              $('div.tabs').addClass('tab1');
              $('div.slider div.foreground').stop().animate({
                'width': '90px'
              }, 1000);
              return $('div.slider div.handle').stop().animate({
                'left': '82px'
              }, 1000);
            });
          },
          exit: function() {
            return $('div.tabs').removeClass('tab1');
          }
        }),
        tab2: Em.Route.extend({
          route: '/tab2',
          connectOutlets: function(router, context) {
            router.get('applicationController').connectOutlet({
              name: 'tab2',
              outletName:'one'
            });
          },
          enter: function() {
            return Em.run.next(function() {
              $('div.tabs').addClass('tab2');
              $('div.slider div.foreground').stop().animate({
                'width': '180px'
              }, 1000);
              return $('div.slider div.handle').stop().animate({
                'left': '172px'
              }, 1000);
            });
          },
          exit: function() {
            return $('div.tabs').removeClass('tab2');
          }
        }),
        tab3: Em.Route.extend({
          route: '/tab3',
          connectOutlets: function(router, context) {
            router.get('applicationController').connectOutlet({
              name: 'tab3',
              outletName:'one'
            });
            router.get('applicationController').connectOutlet({
              name: 'Tabs',
              outletName:'two'
            });
            router.get('tab3Controller').connectOutlet({name:'tab6',outletName:'three'});
          },
          enter: function() {
            return Em.run.next(function() {
              $('div.tabs').addClass('tab3');
              $('div.slider div.foreground').stop().animate({
                'width': '271px'
              }, 1000);
              return $('div.slider div.handle').stop().animate({
                'left': '263px'
              }, 1000);
            });
          },
          exit: function() {
            return $('div.tabs').removeClass('tab3');
          }
        }),
        tab4: Em.Route.extend({
          route: '/tab4',
          connectOutlets: function(router, context) {
            /*router.get('applicationController').connectOutlet({
              name: 'tab4',
              outletName:'one'
            });*/
          router.get('tab3Controller').connectOutlet({name:'tab6',outletName:'three'});

          },
          enter: function() {
            return Em.run.next(function() {
              $('div.tabs').addClass('tab1');
              $('div.slider div.foreground').stop().animate({
                'width': '90px'
              }, 1000);
              return $('div.slider div.handle').stop().animate({
                'left': '82px'
              }, 1000);
            });
          },
          exit: function() {
            return $('div.tabs').removeClass('tab1');
          }
        }),
        tab5: Em.Route.extend({
          route: '/tab5',
          connectOutlets: function(router, context) {
/*            router.get('applicationController').connectOutlet({
              name: 'tab5',
              outletName:'one'
            });*/
          router.get('tab3Controller').connectOutlet({name:'tab6',outletName:'three'});

          },
          enter: function() {
            return Em.run.next(function() {
              $('div.tabs').addClass('tab2');
              $('div.slider div.foreground').stop().animate({
                'width': '180px'
              }, 1000);
              return $('div.slider div.handle').stop().animate({
                'left': '172px'
              }, 1000);
            });
          },
          exit: function() {
            return $('div.tabs').removeClass('tab2');
          }
        })

      })
    });
    window.App = App;
    return App.initialize();
  });

}).call(this);