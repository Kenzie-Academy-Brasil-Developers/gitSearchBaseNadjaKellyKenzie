export const loginsAll = async (valuex) => {
    try{
        const allUser = await fetch(`https://api.github.com/users/${valuex}`, {
            method:'GET', 
            headers: { 
                "Content-Type": "application/json"
            }
        })

        if(allUser.status == 200){
            const response = await allUser.json()
            localStorage.setItem('user', JSON.stringify(response))
            window.location.replace('./src/pages/profile.html')
            return response
        }
        else{
            window.location.replace('./src/pages/error.html')
        }
    } catch (error) {
        console.log(error)
    }
    
}

export async function inputValues (){
    const button = document.querySelector('.buttonForm')
    button.addEventListener('click', async (event) => { 
        event.preventDefault()
        const input = document.querySelector('#userName')
        const value = input.value
        const data = await loginsAll(value)
        return data
    } ) 
}
inputValues()

function errorCaracter(){
    const input = document.querySelector('#userName');
    const error = document.querySelector('#error');
  
    input.addEventListener('input', () =>{
      if(input.validity.patternMismatch){
        error.style.display = "block";
      } else {
        error.style.display = "none";
      }
    });

  }

  errorCaracter()

