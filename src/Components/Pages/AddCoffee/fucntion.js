export function addCoffeFormHandle(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const imageUrl = form.image_url.value;
    const weight = form.weight.value;
    const origin = form.origin.value;
    const price = form.price.value;

    const cofffesData = {
        title,
        imageUrl,
        weight,
        origin,
        price,
    }

    fetch("http://localhost:8585/add_coffee",{
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(cofffesData),
    }).then((res) => {
        res.json()
    }).then((data) => {
        console.log(data)
    })
}