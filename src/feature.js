const getGreetingText = (hourOfDay) => {
    if (hourOfDay < 12) {
        return "Good morning!"
    } else if (hourOfDay < 17) {
        return "Good afternoon!"
    } else {
        return "Good evening!"
    }
};
export default getGreetingText;