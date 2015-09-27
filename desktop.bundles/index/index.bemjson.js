module.exports = {
    block: 'page',
    title: 'Мэджик Десктоп — программа для умственного развития детей',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'section',
            mix: { block: 'header' },
            content: [
                {
                    block: 'social',
                    content: ['fb', 'vk', 'ok'].map(function(network) {
                        return {
                            block: 'link',
                            url: '#' + network,
                            mix: {
                                block: 'social',
                                elem: 'item',
                                elemMods: {
                                    network: network
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
                            block: 'video'
                        },
                        {
                            block: 'button',
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
                                // ticker: true,
                                tickerHover: true,
                                speed: 5000,
                                responsive: false
                            } },
                            content: [
                                {
                                    elem: 'item',
                                    content: 'IMG1'
                                },
                                {
                                    elem: 'item',
                                    content: 'IMG2'
                                },
                                {
                                    elem: 'item',
                                    content: 'IMG3'
                                }
                            ]
                        },
                        {
                            block: 'description',
                            elem: 'text',
                            content: [
                                {
                                    block: 'description',
                                    elem: 'main',
                                    content: 'Мэджик Десктоп — это компьютерная программа, которая сама обучает Вашего ребенка с помощью интерактивных игр.'
                                },
                                {
                                    tag: 'p',
                                    content: 'Занимаясь в Мэджик Десктоп Ваш ребенок разовьёт:'
                                },
                                {
                                    block: 'list',
                                    content: [
                                        'Внимание и восприятие окружающего мира',
                                        'Способность к анализу, определению свойств и характеристик предметов: цвета, размеры, вес, геометрическая форма,   назначение предметов.',
                                        'Память. Сможет запоминать и воспроизводить по порядку до 11 предметов.',
                                        'Развивает логическое мышление.',
                                        'Счет и математические способности.',
                                        'Обучается чтению.',
                                        'Развивает способность к систематизации: группировке предметов по их свойствам и назначению.',
                                        'Абстрактное мышление. Выявление закономерностей. Способность к предположениям.',
                                        'Слух. Восприятие нот, тона и различных музыкальных инструментов.',
                                        'Творческие способности. Способность создавать что-то новое.',
                                        'Воображение. Способность оперировать образами и понятиями в уме.'
                                    ].map(function(item) {
                                        return {
                                            elem: 'item',
                                            content: item
                                        };
                                    })
                                },
                                {
                                    tag: 'p',
                                    content: 'Так же, с помощью обучающих приложений и познавательного видео Ваш ребенок узнает много интересного об окружающем мире, науках, профессиях, жизненных навыках и многом другом.'
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
                    block: 'section',
                    mix: { block: 'possibilities' },
                    content: [
                        {
                            block: 'possibilities',
                            elem: 'heading',
                            mix: { block: 'section', elem: 'heading' },
                            content: 'Занимаясь в Мэджик Десктоп Ваш ребенок будет уметь:'
                        },
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
                                            content: [
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
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'section',
                    mix: { block: 'features' },
                    content: [
                        {
                            block: 'features',
                            elem: 'heading',
                            mix: { block: 'section', elem: 'heading' },
                            content: 'Супер способности Мэджик Десктоп:'
                        },
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
                    block: 'section',
                    mix: [{ block: 'users' }, { block: 'clearfix' }],
                    content: [
                        {
                            block: 'users',
                            elem: 'heading',
                            mix: { block: 'section', elem: 'heading' },
                            content: 'Мэджик Десктоп уже в заботливых семьях:'
                        },
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
                            content: '80.000.000 семей по всему миру и 1.500.000 семей в России уже используют Мэджик Десктоп для развития своих детей.'
                        }
                    ]
                },
                {
                    block: 'section',
                    mix: { block: 'download' },
                    content: [
                        {
                            block: 'download',
                            elem: 'why',
                            content: 'Дайте Вашему ребенку возможность идти в ногу со временем, развиваться быстрее сверстников и добиваться большего в жизни!'
                        },
                        {
                            block: 'download',
                            elem: 'how',
                            content: 'Используйте Мэджик Десктоп!'
                        },
                        {
                            block: 'button',
                            text: 'Нажмите сюда для установки Мэджик Десктоп'
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
