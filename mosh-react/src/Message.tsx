function Message() {

    let name: string = "Destry"

    if (name == "Destry") {
        return (
            <h1>Hello Other Worlds, praise the {name}</h1>
        )
    } else {
        return (
            <h1>The Elder Gods are Displeased!</h1>
        )
    }
};

export default Message;