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
                        default:
                            output = "Command not found<br/>";
                    }

                    $('#history').append(output);
                }
            });
        });