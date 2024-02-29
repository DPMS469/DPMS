$(function () {
    $('.terminal').on('click', function () {
        $('#input').focus();
    });

    $('#input').on('keydown', function search(e) {
        if (e.keyCode == 13) {
            var inputValue = $(this).val();
            var output = "";

            $('#history').append('root@user ' + inputValue + '<br/>');

            if (inputValue.substring(0, 3) === 'cd ') {
                var directory = inputValue.substring(3);
                $('#path').html(directory + '&nbsp;>&nbsp;');
            }

            $('#input').val('');

            if (inputValue.startsWith('echo ')) {
                var echoValue = inputValue.substring(5);
                output = echoValue + '<br/>';
            } else {
                switch (inputValue) {
                    case 'ls':
                        output = "file1.txt<br/>file2.txt<br/>folder1<br/>folder2<br/>";
                        break;
                    case 'pwd':
                        output = "/user/home<br/>";
                        break;
                    case 'date':
                        output = new Date().toString() + "<br/>";
                        break;
                    case 'whoami':
                        output = "root<br/>";
                        break;
                    case 'help':
                        output = "<strong>Available commands:</strong><br/>";
                        output += "ls          - List directory contents<br/>";
                        output += "pwd         - Print working directory<br/>";
                        output += "date        - Display current date and time<br/>";
                        output += "whoami      - Print the current user<br/>";
                        output += "echo [text] - Echo the given text<br/>";
                        output += "clear       - Clear the terminal history<br/>";
                        output += "help        - Display this help message<br/>";
                        break;
                    case 'clear':
                        $('#history').html('');
                        output = "Terminal history cleared<br/>";
                        break;
                    default:
                        output = "Command not found - try 'help'<br/>";
                }
            }

            $('#history').append(output);
        }
    });
});
