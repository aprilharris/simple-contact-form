//--------------------------------------------------------------------------------------------------------------------------------------
// HELPERS & NON-TUTORIAL RELATED FUNCTIONALITY
//--------------------------------------------------------------------------------------------------------------------------------------

// Import helpers
const fireEvent = require('../../node_modules/orionjs/helpers/fireEvent.js');

(function() {
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault;
    alert('Thank you for your application!');
  });
})();

(function() {
  let toggle = document.querySelectorAll('[data-toggle]'),
    toggleText = document.querySelectorAll('[data-toggle-text]'),
    i;

  for (i = 0; i < toggleText.length; i++) {
    toggleText[i].addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('is-active');
      let text = this.dataset.toggleText;
      this.dataset.toggleText = this.innerText;
      this.innerText = text;
    });
  }

  for (i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', function(e) {
      e.preventDefault();
      let inputs = document.querySelectorAll(`.${this.dataset.toggle}`),
        k;
      for (k = 0; k < inputs.length; k++) {
        inputs[k].disabled
          ? (inputs[k].disabled = false)
          : (inputs[k].disabled = true);
        inputs[k].classList.toggle('u-hide');
      }
    });
  }
})();

//--------------------------------------------------------------------------------------------------------------------------------------
// C-TOOLTIP COMPONENT FUNCTIONALITY
//--------------------------------------------------------------------------------------------------------------------------------------

(function() {
  let tooltips = document.querySelectorAll('.c-tooltip'),
    i;
  for (i = 0; i < tooltips.length; i++) {
    tooltips[i].addEventListener('click', function() {
      this.classList.toggle('is-active');
    });
    tooltips[i].addEventListener('keypress', function(e) {
      if (e.which === 13) {
        this.classList.toggle('is-active');
      }
    });
  }
})();

//--------------------------------------------------------------------------------------------------------------------------------------
// VALIDATION FUNCTIONALITY
//--------------------------------------------------------------------------------------------------------------------------------------

(function() {
  let inputs = document.querySelectorAll('input'),
    i,
    validate = function(input) {
      let message = document.querySelector(
        `[data-linked-input='${input.name}']`
      );
      if (!input.checkValidity() && message) {
        input.setAttribute('aria-invalid', 'true');
        // Show correct validation message
        message.classList.add('is-active');
        message.setAttribute('aria-hidden', 'false');
        if (input.validity.patternMismatch) {
          message.innerText = input.dataset.patternMismatchText;
        } else if (input.validity.typeMismatch) {
          message.innerText = input.dataset.typeMismatchText;
        } else {
          message.innerText = input.dataset.requiredText;
        }
      } else if (message) {
        input.setAttribute('aria-invalid', 'false');
        message.classList.remove('is-active');
        message.innerText = '';
        message.setAttribute('aria-hidden', 'true');
      }
    };

  // Setup validate on submit
  document
    .querySelector("button[type='submit']")
    .addEventListener('click', function() {
      for (i = 0; i < inputs.length; i++) {
        validate(inputs[i]);
      }
      document.querySelector("[aria-invalid='true']").focus();
    });

  for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('invalid', function(e) {
      e.preventDefault();
    });
    inputs[i].addEventListener('change', function() {
      validate(this);
    });
  }
})();

//--------------------------------------------------------------------------------------------------------------------------------------
// PROGRESS-BAR COMPONENT FUNCTIONALITY
//--------------------------------------------------------------------------------------------------------------------------------------

(function() {
  let progressBar = document.querySelector('.js-progress-bar'),
    progressBarPercentage = document.querySelector(
      '.js-progress-bar-percentage'
    ),
    inputs = document.querySelectorAll('input[required]'),
    i,
    totalList = [],
    validList = [];

  for (i = 0; i < inputs.length; i++) {
    if (totalList.indexOf(inputs[i].name) === -1) {
      totalList.push(inputs[i].name);
    }
    inputs[i].addEventListener('change', function() {
      if (
        this.getAttribute('aria-invalid') === 'false' &&
        validList.indexOf(this.name) === -1
      ) {
        validList.push(this.name);
      } else if (
        this.getAttribute('aria-invalid') === 'true' &&
        validList.indexOf(this.name) !== -1
      ) {
        validList.splice(validList.indexOf(this.name), 1);
      }
      let percentage =
        Math.round((validList.length / totalList.length) * 100) + '%';
      progressBar.style.width = percentage;
      progressBarPercentage.innerText = percentage;
    });
  }
})();

//--------------------------------------------------------------------------------------------------------------------------------------
// DATE OF BIRTH - JUMP TO NEXT INPUT
//--------------------------------------------------------------------------------------------------------------------------------------

(function() {
  var inputs = document.querySelectorAll('#bday-day, #bday-month');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
      if (this.value.length === 2) {
        this.nextElementSibling.focus();
      }
    });
  }
})();

//--------------------------------------------------------------------------------------------------------------------------------------
// C-INPUT-RADIO FUNCTIONALITY
//--------------------------------------------------------------------------------------------------------------------------------------

(function() {
  let inputs = document.querySelectorAll('.c-input-radio'),
    i,
    k;
  for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keypress', function(e) {
      var input = this.querySelector('input');
      if (e.which === 13) {
        if (!input.checked) {
          input.checked = true;
        }
        fireEvent(input, 'change');
      }
    });
  }
})();

//--------------------------------------------------------------------------------------------------------------------------------------
// POPULAR RESPONSE FUNCTIONALITY
//--------------------------------------------------------------------------------------------------------------------------------------

//FORM VALIDATION
(function() {
  let inputs = document.querySelectorAll('[data-popular-response]'),
    i;
  for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', function(e) {
      e.preventDefault();
      let input = document.querySelector(
        `[name='${this.dataset.popularResponse}']`
      );
      input.value = this.innerText;
      input.focus();
      fireEvent(input, 'change');
    });
  }
})();

/* select every input tag */
/*grabs all the input tags*/
/*should the user click the submit button, and triggers empty field function*/

(function() {
  let inputs = document.querySelectorAll('input'),
    i,
    validate = function(input) {
      let message = document.querySelector(
        `[data-linked-input='${input.name}']`
      );
      if (!input.checkValidity() && message) {
        input.setAttribute('aria-invalid', 'true');
        // Show correct validation message
        message.classList.add('is-active');
        message.setAttribute('aria-hidden', 'false');
        if (input.validity.patternMismatch) {
          message.innerText = input.dataset.patternMismatchText;
        } else if (input.validity.typeMismatch) {
          message.innerText = input.dataset.typeMismatchText;
        } else {
          message.innerText = input.dataset.requiredText;
        }
      } else if (message) {
        input.setAttribute('aria-invalid', 'false');
        message.classList.remove('is-active');
        message.innerText = '';
        message.setAttribute('aria-hidden', 'true');
      }
    };

  document
    .querySelectorAll("button[type='submit']")
    .addEventListener('click', function() {
      for (i = 0; i < inputs.length; i++) {
        validate(inputs[i]);
      }

      document.querySelector("[aria-invalid='true']").focus();
    });
})();



// PROGRESS BAR
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(container, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0