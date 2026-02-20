async function api(data){

const res = await fetch(API_URL,{
method:"POST",
body: JSON.stringify(data)
});

return await res.json();

}