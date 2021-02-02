const getChatInHtml = require('./getChatInHtml');

module.exports = hostname => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Worker</title>
</head>
<body>

    <form autocomplete="off" action="/worker" method="post">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username" value="${hostname}"><br>
        <label for="message">Message:</label><br>
        <input autocomplete="false" type="text" id="message" name="message" value=""><br><br>
        <input type="submit" value="Submit">
    </form>
    
    
   <div>${getChatInHtml()}</div>

</body>
</html>
`
};