class Validator {

    constructor() {
      this.validations = [
        'data-min-length',
        'data-max-length',
        'data-cnpj-validate',
        'data-email-validate',
        'data-required',
        'data-equal',
        'data-password-validate',
      ]
    }
  
    // inicia a validação de todos os campos
    validate(form) {
  
      // limpa todas as validações antigas
      let currentValidations = document.querySelectorAll('form .error-validation');
  
      if(currentValidations.length) {
        this.cleanValidations(currentValidations);
      }
  
      // pegar todos inputs
      let inputs = form.getElementsByTagName('input');
      
      // transformar HTMLCollection em arr
      let inputsArray = [...inputs];
      // loop nos inputs e validação mediante aos atributos encontrados
      inputsArray.forEach(function(input, obj) {
  
        // fazer validação de acordo com o atributo do input
        for(let i = 0; this.validations.length > i; i++) {
          if(input.getAttribute(this.validations[i]) != null) {
  
            // limpa string para saber o método
            let method = this.validations[i].replace("data-", "").replace("-", "");
  
            // valor do input
            let value = input.getAttribute(this.validations[i])
           
            // invoca o método
            this[method](input,value);
  
          }
        }
  
      }, this);
  
    }
  
    // método para validar se tem um mínimo de caracteres
    minlength(input, minValue) {
  
      let inputLength = input.value.length;
  
      let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;
  
      if(inputLength < minValue) {
        this.printMessage(input, errorMessage);
      }
  
    }
  
    // método para validar se passou do máximo de caracteres
    maxlength(input, maxValue) {
  
      let inputLength = input.value.length;
  
      let errorMessage = `O campo precisa ter menos que ${maxValue} caracteres`;
  
      if(inputLength > maxValue) {
        this.printMessage(input, errorMessage);
      }
  
    }
  
    // método para validar strings que só contem letras
    onlyletters(input) {
  
      let re = /^[A-Za-z]+$/;;
  
      let inputValue = input.value;
  
      let errorMessage = `Este campo não aceita números nem caracteres especiais`;
  
      if(!re.test(inputValue)) {
        this.printMessage(input, errorMessage);
      }
  
    }
  
    // método para validar e-mail
    emailvalidate(input) {
      let re = /\S+@\S+\.\S+/;
  
      let email = input.value;
      console.log(email);
  
      let errorMessage = `Insira um e-mail no padrão matheus@email.com`;
  
      if(!re.test(email)) {
        this.printMessage(input, errorMessage);
      }
  
    }
    cnpjvalidate(input) {   
        let cnpj = input.value;
         let errorMessage = `Insira um CNPJ Valido`;
        
           if(input == ''){
            
           return false;
           }
           
           if (input.length != 14) {
            console.log(cnpj);
               return false;
           }
           // Elimina CNPJs invalidos conhecidos
          if (cnpj == "00000000000000" || 
              cnpj == "11111111111111" || 
              cnpj == "22222222222222" || 
              cnpj == "33333333333333" || 
              cnpj == "44444444444444" || 
              cnpj == "55555555555555" || 
              cnpj == "66666666666666" || 
              cnpj == "77777777777777" || 
              cnpj == "88888888888888" || 
              cnpj == "99999999999999"){
              
                 return false;
              }
           // Valida DVs
           tamanho = input.length - 2
           numeros = input.substring(0,tamanho);
           digitos = input.substring(tamanho);
           soma = 0;
           pos = tamanho - 7;
           for (i = tamanho; i >= 1; i--) {
             soma += numeros.charAt(tamanho - i) * pos--;
             if (pos < 2)
                   pos = 9;
           }
           resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
           if (resultado != digitos.charAt(0)){
            console.log(cnpj);
               return false;
           }     
           tamanho = tamanho + 1;
           numeros = input.substring(0,tamanho);
           soma = 0;
           pos = tamanho - 7;
           for (i = tamanho; i >= 1; i--) {
             soma += numeros.charAt(tamanho - i) * pos--;
             if (pos < 2)
                   pos = 9;
           }
           resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
           if (resultado != digitos.charAt(1)){
            console.log(cnpj);
                 return  false;
           }
          
           console.log(cnpj);
           return true;
           
       }
    // verificar se um campo está igual o outro
    equal(input, inputName) {
      let inputToCompare = document.getElementsByName(inputName)[0];
  
      let errorMessage = `Este campo precisa estar igual ao ${inputName}`;
  
      if(input.value != inputToCompare.value) {
        this.printMessage(input, errorMessage);
      }
    }
    
    // método para exibir inputs que são necessários
    required(input) {
  
      let inputValue = input.value;
        console.log(inputValue);
      if(inputValue === '') {
        let errorMessage = `Este campo é obrigatório`;
  
        this.printMessage(input, errorMessage);
      }
  
    }
  
    // validando o campo de senha
    passwordvalidate(input) {
  
      // explodir string em array
      let charArr = input.value.split("");
  
      let uppercases = 0;
      let numbers = 0;
  
      for(let i = 0; charArr.length > i; i++) {
        if(charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))) {
          uppercases++;
        } else if(!isNaN(parseInt(charArr[i]))) {
          numbers++;
        }
      }
  
      if(uppercases === 0 || numbers === 0) {
        let errorMessage = `A senha precisa um caractere maiúsculo e um número`;
  
        this.printMessage(input, errorMessage);
      }
  
    }
  
    // método para imprimir mensagens de erro
    printMessage(input, msg) {
    
      // checa os erros presentes no input
      let errorsQty = input.parentNode.querySelector('.error-validation');
  
      // imprimir erro só se não tiver erros
      if(errorsQty === null) {
        let template = document.querySelector('.error-validation').cloneNode(true);
  
        template.textContent = msg;
    
        let inputParent = input.parentNode;
    
        template.classList.remove('template');
    
        inputParent.appendChild(template);
      }
  
    }
  
    // remove todas as validações para fazer a checagem novamente
    cleanValidations(validations) {
      validations.forEach(el => el.remove());
    }
  
  }
  
  let form = document.getElementById('register-form');
  let submit = document.getElementById('btn-submit');
  
  let validator = new Validator();
  
  // evento de envio do form, que valida os inputs
  submit.addEventListener('click', function(e) {
    e.preventDefault();
  
    validator.validate(form);
  
  });

  