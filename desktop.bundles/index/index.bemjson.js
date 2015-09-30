module.exports = {
    block: 'page',
    title: 'Мэджик Десктоп — программа для умственного развития детей',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: 'Magic Desktop 9.1 - полноценная компьютерная система для детей!' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' },
        [
            {
                property: 'og:title',
                content: 'Magic Desktop 9.1 – полноценная компьютерная система для детей!'
            },
            {
                property: 'og:site_name',
                content: 'Magic Desktop'
            },
            {
                property: 'og:url',
                content: 'http://www.magicdesktop.com/ru-RU'
            },
            {
                property: 'og:image',
                content: 'http://www.magicdesktop.com/i/social_img.jpg'
            },
            {
                property: 'og:description',
                content: 'Вдохновляет детей учиться, обеспечивает их онлайн-безопасность и защищает ваш компьютер от повреждений.'
            },
            {
                property: 'og:type',
                content: 'website'
            },
            {
                property: 'og:locale',
                content: 'ru_RU'
            },
            {
                property: 'fb:app_id',
                content: '567143303315365'
            }
        ].map(function(meta) {
            return {
                elem: 'meta',
                attrs: { property: meta.property, content: meta.content }
            };
        })
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'section',
            mix: { block: 'header' },
            content: [
                {
                    block: 'social',
                    content: [
                        {
                            name: 'fb',
                            url: '//www.facebook.com/magicdesktop'
                        },
                        {
                            name: 'vk',
                            url: '#vk'
                        },
                        {
                            name: 'ok',
                            url: '#ok'
                        }
                    ].map(function(network) {
                        return {
                            block: 'link',
                            url: network.url,
                            mix: {
                                block: 'social',
                                elem: 'item',
                                elemMods: {
                                    network: network.name
                                }
                            }
                        };
                    })
                },
                'Мэджик Десктоп — программа для умственного развития детей',
            ]
        },
        {
            block: 'content',
            content: [
                {
                    block: 'section',
                    mix: { block: 'introduction' },
                    content: [
                        {
                            block: 'introduction',
                            elem: 'slogan',
                            content: [
                                'Все для умственного развития детей ',
                                {
                                    elem: 'em',
                                    content: 'от 2 до 12 лет'
                                },
                                '<br>собрано в одном месте — в Мэджик Десктоп'
                            ]
                        },
                        {
                            block: 'video',
                            url: 'https://www.youtube.com/embed/1ZpTwSULBh0'
                        },
                        {
                            block: 'button',
                            mix: { block: 'introduction', elem: 'download' },
                            mods: { type: 'link', theme: 'md', view: 'round' },
                            url: 'http://www.magicdesktop.com/ru-RU/Download',
                            text: 'Скачать программу'
                        }
                    ]
                },
                {
                    block: 'section',
                    mix: { block: 'description' },
                    content: [
                        {
                            block: 'carousel',
                            js: { opts: {
                                mode: 'vertical',
                                ticker: true,
                                tickerHover: true,
                                speed: 10000,
                                responsive: false
                            } },
                            content: [
                                'http://lorempixel.com/260/146/abstract/?rnd=' + Math.random(),
                                'http://lorempixel.com/260/146/abstract/?rnd=' + Math.random(),
                                'http://lorempixel.com/260/146/abstract/?rnd=' + Math.random(),
                                'http://lorempixel.com/260/146/abstract/?rnd=' + Math.random(),
                                'http://lorempixel.com/260/146/abstract/?rnd=' + Math.random(),
                                'http://lorempixel.com/260/146/abstract/?rnd=' + Math.random()
                            ].map(function(url) {
                                return {
                                    elem: 'item',
                                    content: {
                                        block: 'image',
                                        url: url
                                    }
                                };
                            })
                        },
                        {
                            block: 'description',
                            elem: 'text',
                            content: [
                                {
                                    block: 'description',
                                    elem: 'main',
                                    content: [
                                        {
                                            tag: 'strong',
                                            content: 'Мэджик Десктоп'
                                        },
                                        ' — это компьютерная программа, которая сама ',
                                        {
                                            tag: 'strong',
                                            content: 'обучает Вашего ребенка'
                                        },
                                        ' с помощью интерактивных игр.'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    content: 'Занимаясь в Мэджик Десктоп Ваш ребенок разовьёт:'
                                },
                                {
                                    block: 'list',
                                    content: [
                                        [{ tag: 'strong', content: 'Внимание' }, ' и восприятие окружающего мира'],
                                        [{ tag: 'strong', content: 'Способность к анализу' }, ' определению свойств и характеристик предметов: цвета, размеры, вес, геометрическая форма,   назначение предметов.'],
                                        [{ tag: 'strong', content: 'Память' }, '. Сможет запоминать и воспроизводить по порядку до 11 предметов.'],
                                        ['Развивает ', { tag: 'strong', content: 'логическое мышление' }, '.'],
                                        [{ tag: 'strong', content: 'Счет' }, ' и математические способности.'],
                                        { tag: 'strong', content: 'Обучается чтению.' },
                                        ['Развивает ', { tag: 'strong', content: 'способность к систематизации' }, ': группировке предметов по их свойствам и назначению.'],
                                        [{ tag: 'strong', content: 'Абстрактное мышление' }, '. Выявление закономерностей. Способность к предположениям.'],
                                        [{ tag: 'strong', content: 'Слух' }, '. Восприятие нот, тона и различных музыкальных инструментов.'],
                                        [{ tag: 'strong', content: 'Творческие способности' }, '. Способность создавать что-то новое.'],
                                        [{ tag: 'strong', content: 'Воображение' }, '. Способность оперировать образами и понятиями в уме.']
                                    ].map(function(item) {
                                        return {
                                            elem: 'item',
                                            content: item
                                        };
                                    })
                                },
                                {
                                    tag: 'p',
                                    content: [
                                        'Так же, с помощью обучающих приложений и познавательного видео ',
                                        {
                                            tag: 'strong',
                                            content: 'Ваш ребенок узнает'
                                        },
                                        ' много интересного ',
                                        {
                                            tag: 'strong',
                                            content: 'об окружающем мире'
                                        },
                                        ', науках, профессиях, жизненных навыках и многом другом.'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    content: 'В Мэджик Десктоп ребенок сможет сам включить и посмотреть любимые мультики, такие как Фиксики, Смешарики, Маша и Медведь и еще около 1000 поучительных мультфильмов.'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'heading',
                    mods: { type: 'possibilities' },
                    content: 'Занимаясь в Мэджик Десктоп Ваш ребенок будет уметь:'
                },
                {
                    block: 'section',
                    mix: { block: 'possibilities' },
                    content: [
                        {
                            block: 'tabbed-pane',
                            content: [
                                {
                                    elem: 'tabs',
                                    content: [
                                        {
                                            elem: 'tab',
                                            elemMods: { state: 'current' },
                                            content: 'К 4 годам'
                                        },
                                        {
                                            elem: 'tab',
                                            content: 'К 7-8 годам'
                                        },
                                        {
                                            elem: 'tab',
                                            content: 'К 11-12 годам'
                                        }
                                    ]
                                },
                                {
                                    elem: 'panes',
                                    content: [
                                        {
                                            elem: 'pane',
                                            elemMods: { state: 'current' },
                                            content: [
                                                {
                                                    block: 'carousel',
                                                    js: { opts: {
                                                        mode: 'vertical',
                                                        ticker: true,
                                                        tickerHover: true,
                                                        speed: 10000,
                                                        responsive: false
                                                    } },
                                                    content: [
                                                        'http://lorempixel.com/260/146/abstract/?rnd=' + Math.random(),
                                                        'http://lorempixel.com/260/146/abstract/?rnd=' + Math.random(),
                                                        'http://lorempixel.com/260/146/abstract/?rnd=' + Math.random(),
                                                        'http://lorempixel.com/260/146/abstract/?rnd=' + Math.random(),
                                                        'http://lorempixel.com/260/146/abstract/?rnd=' + Math.random(),
                                                        'http://lorempixel.com/260/146/abstract/?rnd=' + Math.random()
                                                    ].map(function(url) {
                                                        return {
                                                            elem: 'item',
                                                            content: {
                                                                block: 'image',
                                                                url: url
                                                            }
                                                        };
                                                    })
                                                },
                                                {
                                                    block: 'list',
                                                    content: [
                                                        'Самостоятельно пользоваться компьютером: включать, выключать, и спользовать мышь и клавиатуру',
                                                        'Называть основные цвета',
                                                        'Различать геометрические фигуры',
                                                        'Запоминать и воспроизводить по порядку 3-4 предметов',
                                                        'Может обобщать предметы по известным свойствам. (найти все красные)',
                                                        'Может находить отличия предметов. (сравнивать две картинки)',
                                                        'Считать до 10',
                                                        'Сравнивать количество: больше или меньше',
                                                        'Читать буквы, слога и правильно произносить составленные из них слова.',
                                                        'Понимать положение предметов относительно себя. (право, лево, в, на, под, за, между, перед, возле и т. д.)',
                                                        'Рисовать геометрические фигуры: круги, квадраты',
                                                        'Обводить и раскрашивать рисунки.',
                                                        'Перерисовывать картинки. ',
                                                        'Собирать простые пазлы. 4 элемента. ',
                                                        'Собирать простые фигуры из элиментов.',
                                                        'Получит представление об окружающем мире в соответствии с возрастными интересами.'
                                                    ].map(function(item) {
                                                        return {
                                                            elem: 'item',
                                                            content: item
                                                        };
                                                    })
                                                },
                                                'Попробуйте Мэджик Декстоп прямо сейчас ',
                                                {
                                                    block: 'link',
                                                    url: 'http://www.magicdesktop.com/ru-RU/Download',
                                                    content: 'скачать программу'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'pane',
                                            content: 'К 7-8 годам случится всякое'
                                        },
                                        {
                                            elem: 'pane',
                                            content: 'К 11-12 спать пора'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'heading',
                    mods: { type: 'features' },
                    content: 'Супер способности Мэджик Десктоп:'
                },
                {
                    block: 'section',
                    mix: { block: 'features' },
                    content: [
                        {
                            elem: 'container',
                            mix: { block: 'clearfix' },
                            content: [
                                {
                                    block: 'feature',
                                    content: [
                                        {
                                            elem: 'heading',
                                            content: 'Автозапуск'
                                        },
                                        {
                                            block: 'image',
                                            url: '../../i/autorun.jpg'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Вы сможете настроить Мэджик Десктоп так, что бы он сразу загружался при включении компьютера. Ваш ребенок сможет заниматься самостоятельно, не имея доступ к вашим файлам и программам.'
                                        }
                                    ]
                                },
                                {
                                    block: 'feature',
                                    content: [
                                        {
                                            elem: 'heading',
                                            content: 'Расписание'
                                        },
                                        {
                                            block: 'image',
                                            url: '../../i/schedule.jpg'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Вы сможете установить расписание, когда и сколько ребенок может использовать как компьютер целиком, так и отдельные программы. Ребенок не будет просиживать все время за компьютером, когда Вас нет дома.'
                                        }
                                    ]
                                },
                                {
                                    block: 'feature',
                                    content: [
                                        {
                                            elem: 'heading',
                                            content: 'Любимые приложения'
                                        },
                                        {
                                            block: 'image',
                                            url: '../../i/favorite.jpg'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Вы можете разрешить использование программ установленных Вами в Windows, добавляя их в меню Мэджик Десктоп. Например: Skype, любимые игры ребенка и т.п. А так же Вы можете разрешать доступ видео файлам, мультикам и фильмам. Все будет под Вашим родительским контролем.'
                                        }
                                    ]
                                },
                                {
                                    block: 'feature',
                                    content: [
                                        {
                                            elem: 'heading',
                                            content: 'Делу — время, потехе — час'
                                        },
                                        {
                                            block: 'image',
                                            url: '../../i/time.jpg'
                                        },
                                        {
                                            elem: 'description',
                                            content: 'Что бы играть в развлекательные игры ребенку нужно платить монетки, которые он будет получать за занятия в обучающих программах. Также Вы можете начислять ему монетки за выполнение домашних дел. Вы сами можете установить сколько ребенок будет получат монет за использование обучающих программ и цену за использование развлекательных приложений.Это поможет воспитать у ребенка отношение к деньгам. Ребенок поймет - что за удовольствие нужно платить, а деньги нужно зарабатывать трудом.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'heading',
                    mods: { type: 'users' },
                    content: 'Мэджик Десктоп уже в заботливых семьях:'
                },
                {
                    block: 'section',
                    mix: [{ block: 'users' }, { block: 'clearfix' }],
                    content: [
                        {
                            block: 'users',
                            elem: 'screens',
                            content: [
                                {
                                    block: 'image',
                                    url: '../../i/users.jpg'
                                },
                                {
                                    block: 'image',
                                    url: '../../i/users.jpg'
                                },
                                {
                                    block: 'image',
                                    url: '../../i/users.jpg'
                                },
                                {
                                    block: 'image',
                                    url: '../../i/users.jpg'
                                }
                            ]
                        },
                        {
                            block: 'users',
                            elem: 'description',
                            content: [
                                '<big>80.000.000</big>',
                                'семей по всему миру',
                                ['и ', '<big>1.500.000</big>', ' семей'],
                                '<big>в России</big>',
                                'уже используют',
                                '<big>Мэджик Десктоп</big>',
                                'для развития своих детей.'
                            ].map(function(line) {
                                return [line, { tag: 'br' }];
                            })
                        }
                    ]
                },
                {
                    block: 'section',
                    mix: { block: 'why' },
                    content: 'Дайте Вашему ребенку возможность идти в ногу со временем, развиваться быстрее сверстников и добиваться большего в жизни!'
                },
                {
                    block: 'section',
                    mix: { block: 'download' },
                    content: [
                        {
                            block: 'download',
                            elem: 'how',
                            content: 'Используйте Мэджик Десктоп!'
                        },
                        {
                            block: 'button',
                            mods: { type: 'link', theme: 'md' },
                            url: 'http://www.magicdesktop.com/ru-RU/Download',
                            text: 'Нажмите сюда<br>для установки<br>Мэджик Десктоп'
                        }
                    ]
                }
            ]
        },
        {
            block: 'section',
            mix: { block: 'footer' },
            content: [
                'Magic Desktop © all rights reserved 2015'
            ]
        }
    ]
};
