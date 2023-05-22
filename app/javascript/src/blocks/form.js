const inputClass   = 'form__input';
const msgClass     = 'form__msg';
const sendBtnClass = 'form__btn';

const fieldGroups = document.querySelectorAll('.form__label');
const form = document.querySelector('.form__form');
const sendButton = document.querySelector(`.form__form .${sendBtnClass}`);

const formTextBase = document.querySelector('.form__base');
const formTextSuccess = document.querySelector('.form__success');

let pending = false;

export default function() {
  // const emailInput = form.querySelector('.form__form input[name=email]');
  // const cityInput = form.querySelector('.form__form input[name=city]');
  // const langInput = form.querySelector('.form__form input[name=lang]');

  for (const fieldGroup of fieldGroups) {
    const field = fieldGroup.querySelector('input');
    field.addEventListener('change', function() {
      validateInput(field, fieldGroup);
      validateFields(true);
    });
  }

  form && form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(validateFields()) {
      if(pending) {
        return;
      }

      pending = true;
      setFieldsLocking(true);

      const formData = new FormData();
      formData.append('email', emailInput.value);
      formData.append('city', cityInput.value);
      formData.append('lang', langInput.value);
      formData.append('authenticity_token', window.csrftoken);

      fetch('/orders', {
        method: 'POST',
        body: formData,
      }).then(res => res.json())
        .then(({success, error}) => {
          if(success) {
            formReset(success);
          } else {
            formReset(success, error || 'Ошибка');
          }
        })
        .catch(error => {
          alert('Ошибка при отправке письма')
          console.error('Ошибка:', error);
          pending = false;
          setFieldsLocking(false);
        });
    }
  });
}

function formReset(isSuccess, errorText) {
  pending = false;
  form.reset();
  setFieldsLocking(false);

  if(isSuccess) {
    chengeText();
  } else if(errorText) {
    const fieldMsg = fieldGroups[0].querySelector(`.${msgClass}`);
    const field = fieldGroups[0].querySelector('input')

    field.classList.add(`${inputClass}--invalid`);

    fieldMsg.classList.add(`${msgClass}--invalid`);
    fieldMsg.classList.add(`${msgClass}--show`);

    fieldMsg.innerHTML = errorText;
  }
}

function setFieldsLocking(isDisabled) {
  if(isDisabled) {
    sendButton.classList.add(`${sendBtnClass}--disabled`);
    sendButton.disabled = true;

    for (const fieldGroup of fieldGroups) {
      const field = fieldGroup.querySelector('input');

      field.disabled = true;
    }
  } else {
    sendButton.classList.remove(`${sendBtnClass}--disabled`);
    sendButton.disabled = false;

    for (const fieldGroup of fieldGroups) {
      const field = fieldGroup.querySelector('input');

      field.disabled = false;
    }
  }
}

function chengeText() {
  formTextBase && formTextBase.classList.add('hidden');
  formTextSuccess && formTextSuccess.classList.remove('hidden')
}

function validateFields(silent) {
  let isFormValid = true;

  for (const fieldGroup of fieldGroups) {
    const field = fieldGroup.querySelector('input');

    const isInputValid = validateInput(field, fieldGroup, silent);
    isFormValid = isInputValid ? isFormValid : false;
  }

  if(isFormValid) {
    sendButton.classList.remove(`${sendBtnClass}--disabled`);
    sendButton.disabled = false;
  } else if(!silent) {
    sendButton.classList.add(`${sendBtnClass}--disabled`);
    sendButton.disabled = true;
  }

  return isFormValid;
}

function validateInput(field, fieldGroup, silent) {
  let isValid = field.checkValidity();
  const fieldMsg = fieldGroup.querySelector(`.${msgClass}`);

  if(!silent) {
    if(isValid) {
      field.classList.remove(`${inputClass}--invalid`);
    } else {
      field.classList.add(`${inputClass}--invalid`);
    }

    if(fieldMsg) {
      const errorMsgText = field.getAttribute('data-error-msg') || '';

      if(isValid) {
        fieldMsg.classList.remove(`${msgClass}--invalid`);
        fieldMsg.classList.remove(`${msgClass}--show`);
      } else {
        fieldMsg.classList.add(`${msgClass}--invalid`);
        fieldMsg.classList.add(`${msgClass}--show`);
      }

      fieldMsg.innerHTML = errorMsgText;
    }
  }

  return isValid;
}
