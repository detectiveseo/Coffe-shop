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
    console.log(
        cofffesData
    )
}