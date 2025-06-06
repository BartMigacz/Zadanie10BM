const fetchData = async () => {
  try {
    const data = await fetch(
      "https://bucsktwhwtumetpopcxn.supabase.co/rest/v1/article?select=*",
      {
        headers: {
          apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1Y3NrdHdod3R1bWV0cG9wY3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxODEwMDgsImV4cCI6MjA2Mzc1NzAwOH0.2iLepWZTbjck62QE7C5SqNCrEkXamwj7eEMyfmekTJA",
        },
      }
    );

    let translateddata = await data.json();
    console.log(translateddata)
    translateddata.forEach(element => {
      const div = document.createElement("div")
      const p = document.createElement("p")
      const p1 = document.createElement("p")
      const p2 = document.createElement("p")
      const p3 = document.createElement("p")
      const p4 = document.createElement("p")
      const autor = `Author: ${element.author}`
      p.innerHTML = autor
      div.appendChild(p)
      const title = `Title: ${element.title}`
      p1.innerHTML = title
      div.appendChild(p1)
      const subtitle = `Subtitle: ${element.subtitle}`
      p2.innerHTML = subtitle
      div.appendChild(p2)
      const created = `Created at: ${element.created_at}`
      p3.innerHTML = created
      div.appendChild(p3)
      const content = `Content: ${element.content}`
      p4.innerHTML = content
      div.appendChild(p4)
      document.getElementById("app").appendChild(div)
    });

  } catch (err) {
    console.error(err.message);
  }
};
window.onload = async () => {
  await fetchData()
}
const insert = async () => {
const datatosend={
  title:document.getElementById("title").value,
  subtitle:document.getElementById("subtitle").value,
  author:document.getElementById("author").value,
  content:document.getElementById("content").value,
}
  try {
    const data = await fetch(
      "https://bucsktwhwtumetpopcxn.supabase.co/rest/v1/article",
      {
        method: "POST",
        headers: {
          apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1Y3NrdHdod3R1bWV0cG9wY3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxODEwMDgsImV4cCI6MjA2Mzc1NzAwOH0.2iLepWZTbjck62QE7C5SqNCrEkXamwj7eEMyfmekTJA",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datatosend),
      }
    );
  } catch (err) {
    console.error(err.message);
  }
};
document.getElementById("addbutton").addEventListener("click",async (e)=>{
  await insert()
})