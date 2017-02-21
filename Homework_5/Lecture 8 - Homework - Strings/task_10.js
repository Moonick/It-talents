var text = "Hello";

for (index = 0; index < text.length; index++) {
    process.stdout.write(String.fromCharCode(text.charCodeAt(index) + 5));
}