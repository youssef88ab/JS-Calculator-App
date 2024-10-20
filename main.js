function reset () 
{
    document.getElementById("result").value = "";
}

function calc(element)
{
    document.getElementById("result").value += element;
}

function del()
{
    let res = document.getElementById("result").value;
    res = res.slice(0 , res.length - 1);
    document.getElementById("result").value = res;
}

function calculer()
{   console.log(eval(document.getElementById("result").value));
    document.getElementById("result").value = eval(document.getElementById("result").value);
}

document.addEventListener('keydown', function (event)
{
    if (event.key === 'Backspace') 
    {
        event.preventDefault(); // Optional: Prevents the default backspace behavior (e.g., navigating back).
        del();
    }
}
);