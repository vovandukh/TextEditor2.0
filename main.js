
$(function () {
    $('.buttonBold').click(function () {
        $('.content').toggleClass('bold');
    });
    $('.buttonItalic').click(function () {
        $('.content').toggleClass('italic');
    });
    $('.uNderline').click(function () {
        $('.content').toggleClass('underline');
    });
    $('.buttonLine').click(function () {
        $('.content').toggleClass('lineThrough');
    });
    $('.buttonLeft').click(function () {
        $('.content').addClass('textLeft');
        $('.content').removeClass('textCenter');
        $('.content').removeClass('textRight');
    });
    $('.buttonCenter').click(function () {
        $('.content').addClass('textCenter');
        $('.content').removeClass('textLeft');
        $('.content').removeClass('textRight');
    });
    $('.buttonRight').click(function () {
        $('.content').addClass('textRight');
        $('.content').removeClass('textLeft');
        $('.content').removeClass('textCenter');
    });
    $('.form-select').click(function () {
        $('.content').css({
            fontFamily: $('.form-select').val()
        });
    });
    $('.optionFont').each(function (index, elem) {
        $(elem).click(function () {
            $('.content').css({
                fontFamily: $(this).text()
            });
        });
        $(elem).css({
            fontFamily: $(this).text()
        });
    });
    $('.optionSize').each(function (index, elem) {
        $(elem).click(function () {
            $('.content').css({
                fontSize: $(this).text()
            });
        })
        $(elem).css({
            fontSize: $(this).text()
        });
    });
    $('.btnFontColor').click(function () {
        $('.container1').css({
            display: 'block'
        });
        $('.fontColor').css({
            display: 'block'
        });
        $('.singIn').css({
            display: 'none'
        });
        $('.colorText').each(function (index, elem) {
            $(elem).click(function () {
                $('.content').css({
                    color: $(this).css('background-color')
                });
            });
        });
    });
    $('.close').click(function () {
        $('.container1').css({
            display: 'none'
        });
        $('.sample').css({
            display: 'none'
        });
    });

    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
    $('.navLink1').click(function () {
        $('.colorBackgroundWrapper').css({
            display: 'block'
        });
        $('.imageBackgroundWrapper').css({
            display: 'none'
        });
        $('.fileUpload').css({
            display: 'none'
        });
    });
    $('.navLink2').click(function () {
        $('.colorBackgroundWrapper').css({
            display: 'none'
        });
        $('.imageBackgroundWrapper').css({
            display: ' block'
        });
        $('.fileUpload').css({
            display: 'none'
        });
    });
    $('.navLink3').click(function () {
        $('.colorBackgroundWrapper').css({
            display: 'none'
        });
        $('.imageBackgroundWrapper').css({
            display: 'none'
        });
        $('.fileUpload').css({
            display: 'block'
        });
    });
    $('.btnBackground').click(function () {
        $('.container1').css({
            display: 'block'
        });
        $('.backgroundColor').css({
            display: 'block'
        });
        $('.singIn').css({
            display: 'none'
        });

    });
    $('.image').on('click', function () {
        $('.content').css({
            background: $(this).css('background-image'),
            backgroundSize: '100%'
        });
    });
    $('.color').on('click', function () {
        $('.content').css({
            background: $(this).css('background-color')
        });
    });
    $('.fileChoose').change(function (event) {
        let url = "url(" + URL.createObjectURL(event.target.files[0]) + ")";
        $('.content').css({
            background: url,
            backgroundSize: '100%'
        });
    });
    $('#btnSing').click(function () {
        $('.singIn').css({
            display: 'block'
        });
        $('.container1').css({
            display: 'block'
        });
    });
    $('.btnSingIn').click(function () {
        if ($('#login').val() == '' || $('#password').val() == '') {
            $('#login').addClass('is-invalid');
            $('#password').addClass('is-invalid');
            $('.invalid-feedback').text('Value is empty');
        } else {
            $('.invalid-feedback').text('Please check your login or password');
        };
        if ($('#login').val() == 'admin' && $('#password').val() == 'admin') {
            $('.singIn').css({
                display: 'none'
            });
            $('.container1').css({
                display: 'none'
            });
            $('#login').val('');
            $('#password').val('');
            $('.btnSplash').prop("disabled", false);
            $('#btnSing').css({
                display: 'none'
            });
            $('#btnSingOut').css({
                display: 'block'
            });
        };
    });
    $('#btnSingOut').click(function () {
        $('.container1').css({
            display: 'block'
        });
        $('.singOut').css({
            display: 'block'
        });
    });
    $('.btnOut').click(function () {
        $('#btnSing').css({
            display: 'block'
        });
        $('#btnSingOut').css({
            display: 'none'
        });
        $('.container1').css({
            display: 'none'
        });
        $('.singOut').css({
            display: 'none'
        });
        $('.btnSplash').prop("disabled", true);
    });
    $('.btnCancel').click(function () {
        $('.container1').css({
            display: 'none'
        });
        $('.singOut').css({
            display: 'none'
        });
    });
    $('.textarea').val($('.content').html());
    $('.btnSplash').click(function () {
        $('.cOntainer').css({
            display: 'none'
        });
        $('.container2').css({
            display: 'block'
        });
    });
    $('.buttonSave').click(function () {
        $('.content').html($('.textarea').val());
        $('.container2').css({
            display: 'none'
        });
        $('.cOntainer').css({
            display: 'block'
        });
    });
    let table = '<tbody>';
    $('.btn-createTable').click(function () {
        if ($('.countTR').val() != '' && $('.countTD').val() != '' && $('.widthTD').val() != '' && $('.heightTD').val() != '' && $('.widthBorder').val() != '' && $('.styleBorder').val() != null && $('.colorBorder').val() != null) {
            for (let i = 0; i < $('.countTR').val(); i++) {
                table += '<tr>';
                for (let i = 0; i < $('.countTD').val(); i++) {
                    table += '<td style ="';
                    table += 'width:' + $('.widthTD').val() + 'px;' + ' ' + 'height:' + $('.heightTD').val() + 'px;';
                    table += 'border:' + $('.widthBorder').val() + 'px' + ' ' + $('.styleBorder').val() + ' ' + $('.colorBorder').val() + '">';
                    table += '</td>';
                }
                table += '</tr>';
            }
            $('.textarea').val(function () {
                return $('.textarea').val() + (`<table> ${table} </tbody></table> `);
            })
            $('.input1').each(function (index, elem) {
                $(elem).removeClass('is-invalid');
            })
            $('.valid-feedback1').css({
                display: 'none'
            });
        } else {
            $('.input1').each(function (index, elem) {
                if ($(elem).val() == '' || $(elem).val() == null) {
                    $(elem).addClass('is-invalid');
                } else {
                    $(elem).removeClass('is-invalid');
                }


            });
            $('.valid-feedback1').css({
                display: 'block'
            });
        }

    });
    $('.buttonTable').click(() => {
        $('.container1').css({
            display: 'block'
        });
        $('.table').css({
            display: 'block'
        });
    });
    $('.btn_reset').click(function () {
        $('.input1').each(function (index, elem) {
            $(elem).val('');
        });

    });

    $('.btn-createListOl').click(function () {
        if ($('.countOl').val() != '' && $('.typeMark').val() != null) {
            let count = 1;
            let listOl = (`<ol style="list-style-type:${$('.typeMark').val()};">`);
            for (let i = 0; i < $('.countOl').val(); i++) {
                listOl += `<li>item${count}</li>`;
                count++;
            }
            $('.textarea').val(function () {
                return $('.textarea').val() + (`${listOl} </ol>`);
            })
            $('.typeMark').removeClass('is-invalid');
            $('.countOl').removeClass('is-invalid');
            $('.valid-feedback2').css({
                display: 'none'
            });

        } else {
            if ($('.countOl').val() == '') {
                $('.countOl').addClass('is-invalid');
            } else {
                $('.countOl').removeClass('is-invalid');
            }
            if ($('.typeMark').val() == null) {
                $('.typeMark').addClass('is-invalid');
            } else {
                $('.typeMark').removeClass('is-invalid');
            }

            $('.valid-feedback2').css({
                display: 'block'
            });

        }
    })
    $('.buttonListOl').click(function () {
        $('.listOl').css({
            display: 'block'
        });
        $('.container1').css({
            display: 'block'
        });
    });
    $('.btn_resetOl').click(function () {
        $('.countOl').val('');
        $('.typeMark').val('');
    });
    $('.btn-createListUl').click(function () {
        if ($('.countUl').val() != '' && $('.typeMarkUl').val() != null) {
            let count = 1;
            let listUl = (`<ul style="list-style-type:${$('.typeMarkUl').val()};">`);
            for (let i = 0; i < $('.countUl').val(); i++) {
                listUl += `<li>item${count}</li>`;
                count++
            }
            $('.textarea').val(function () {
                return $('.textarea').val() + (`${listUl} </ul>`);
            })
            $('.typeMarkUl').removeClass('is-invalid');
            $('.countUl').removeClass('is-invalid');
            $('.valid-feedback3').css({
                display: 'none'
            });

        } else {
            if ($('.countUl').val() == '') {
                $('.countUl').addClass('is-invalid');
            } else {
                $('.countUl').removeClass('is-invalid');
            }
            if ($('.typeMarkUl').val() == null) {
                $('.typeMarkUl').addClass('is-invalid');
            } else {
                $('.typeMarkUl').removeClass('is-invalid');
            }

            $('.valid-feedback3').css({
                display: 'block'
            });

        }

    });
    $('.buttonListUl').click(function () {
        $('.listUl').css({
            display: 'block'
        });
        $('.container1').css({
            display: 'block'
        });
    })
    $('.btn_resetUl').click(function () {
        $('.countUl').val('');
        $('.typeMarkUl').val('');
    })

})


