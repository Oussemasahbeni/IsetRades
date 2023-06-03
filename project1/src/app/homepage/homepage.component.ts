import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



declare var jQuery: any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']

})
export class HomepageComponent implements OnInit {

  ngOnInit() {
    (function ($) {
      $.fn.countTo = function (options: any) {
        options = options || {};

        return $(this).each(function (this: HTMLElement) {
          // set options for current element
          var settings = $.extend(
            {},
            $.fn.countTo.defaults,
            {
              from: $(this).data('from'),
              to: $(this).data('to'),
              speed: $(this).data('speed'),
              refreshInterval: $(this).data('refresh-interval'),
              decimals: $(this).data('decimals'),
            },
            options
          );

          // how many times to update the value, and how much to increment the value on each update
          var loops = Math.ceil(settings.speed / settings.refreshInterval),
            increment = (settings.to - settings.from) / loops;

          // references & variables that will change with each update
          var self: HTMLElement = this,
            $self = $(this),
            loopCount = 0,
            value = settings.from,
            data = $self.data('countTo') || {};

          $self.data('countTo', data);

          // if an existing interval can be found, clear it first
          if (data.interval) {
            clearInterval(data.interval);
          }
          data.interval = setInterval(updateTimer, settings.refreshInterval);

          // initialize the element with the starting value
          render(value);

          function updateTimer() {
            value += increment;
            loopCount++;

            render(value);

            if (typeof settings.onUpdate === 'function') {
              settings.onUpdate.call(self, value);
            }

            if (loopCount >= loops) {
              // remove the interval
              $self.removeData('countTo');
              clearInterval(data.interval);
              value = settings.to;

              if (typeof settings.onComplete === 'function') {
                settings.onComplete.call(self, value);
              }
            }
          }

          function render(value: number) {
            var formattedValue = settings.formatter.call(self, value, settings);
            $self.html(formattedValue);
          }
        });
      };

      $.fn.countTo.defaults = {
        from: 100, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 100000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null, // callback method for when the element finishes updating
      };

      function formatter(value: number, settings: any) {
        return value.toFixed(settings.decimals);
      }
    })(jQuery);

    jQuery(function ($: any) {
      // custom formatting example
      $('.count-number').data('countToOptions', {
        formatter: function (value: number, options: any) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        },
      });

      // start all the timers
      $('.timer').each(count);

      function count(this: any, options: any) {
        const $this: any = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
    });

  }

  carouselOptions: OwlOptions = {


    loop: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'flipInX',

    responsive: {
      0: {
        items: 1,
        dots: true,

      },
      600: {
        items: 3,
        dots: true,

      },
      1000: {
        items: 1,
        dots: true,

      },

    },

  };

  dynamicSlides = [
    {
      id: '1',
      src: '../../assets/rades.jpg',
      alt: 'Side 1',
      title: 'Side 1'
    },
    {
      id: '2',
      src: '../../assets/rades1.jpg',
      alt: 'Side 2',
      title: 'Side 2'
    },
    {
      id: '3',
      src: '../../assets/rades3.jpg',
      alt: 'Side 3',
      title: 'Side 3'
    }
  ]



}


