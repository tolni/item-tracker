const qf = document.getElementById('item_question_form');

try {
    qf.addEventListener('submit', async function (event) {
        event.preventDefault();
        const data = new FormData(qf);
        const params = new URLSearchParams(data);
        const response = await fetch('http://127.0.0.1:8090/item/question?' + params);
        const items = await response.json();
      
        const ql = document.getElementById('question_content_list');
        let lst = '';
        for (const item of items) { 
          lst += `<li><b>${item.name}</b> - ${item.location}`;
        }
        ql.innerHTML = lst;
      });
      
      const af = document.getElementById('item_add_form');
      
      af.addEventListener('submit', async function (event) {
        event.preventDefault();
        const data = new FormData(af);
        const params = JSON.stringify(Object.fromEntries(data));
        alert(`params ${params}`)
        const response = await fetch('http://127.0.0.1:8090/item/add',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: params
        });
        alert('Item tracked');
        af.reset();
      });
} catch (error) {
    alert('Error, please try again in a few minutes!')
}