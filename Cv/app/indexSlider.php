<?php
    require_once('./src/php/config.php');
    $SliderNbr = 0;   
    $subskillsnbr = 0;
?>
<!DOCTYPE html>
<html lang="fr">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="MobileOptimized" content="width" />
        <link rel="icon" type="image/x-icon" href="/src/img/favicons.png">
        <meta name="description" content="description dans le moteur de recherche" />
        <meta name="author" content="arthur remendaer" />
        <link rel="stylesheet" href="./dist/css/index.css">
        <title>Cv d'Arthur Remendaer</title>
    </head>

    <body itemscope itemtype='https://schema.org/CreativeWork'>

        <main>
            <section class='Main__slider' id="skills">
                <h2>Slider</h2>
                <div class='SliderLeft'>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 200 200" xml:space="preserve">
                        <title>Right slider Button</title>
                        <line x1="10" y1="100" x2="190" y2="190" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round" stroke-linejoin="10"/>
                        <line x1="10" y1="100" x2="190" y2="10" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round" stroke-linejoin="10"/>
                    </svg>
                </div>
                <?php foreach(CONFIG['slider']['slider1'] as $sliderKey =>$SliderElement): 
                ?> 
                        <div class="slider__Container">
                                <p>Arthur remendaer</p>
                                <p><?= $sliderKey ?></p>
                                <?php
                                    if ($sliderKey === 'Overview'):
                                ?>
                                <div class='canvas <?= $sliderKey  ?>'></div>
                                <article>
                                    <h3 class="SliderArticle__Title--hidden">SkillsOverview</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>langage</th>
                                                <th>level</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php 
                                                foreach($SliderElement['langage'] as $sliderContent):
                                            ?>
                                            <tr>
                                                <th><?= $sliderContent['name'] ?></th>
                                                <th><?= $sliderContent['skill'] ?><span class='Slider__percent'>/100</span></th>
                                            </tr>
                                            <?php endforeach ?>
                                        </tbody>
                                    </table>
                                </article>
                                <?php else: ?>
                                <?php 
                                    foreach($SliderElement['content'] as $sliderContentKey =>$sliderContent):
                                        if($sliderContent['canvas']): ?>
                                        <div class='canvas <?= $sliderKey  ?>'></div>
                                        <?php endif; 
                                        if ($sliderContent["subtitle"]) {
                                            for ($i=0; $i < count($sliderContent["subtitle"]); $i++):
                                                ?>
                                                    <input type="radio" id="<?= $sliderContent["subtitle"][$i] ?>" name="<?= $sliderKey  ?>" <?php if ($i === 0){ echo "checked";}?>>
                                                    <label for="<?= $sliderContent["subtitle"][$i] ?>"><?= $sliderContent["subtitle"][$i] ?></label>
                                                <?php
                                            endfor;
                                        }
                                    ?>
                                    <div class='<?= $sliderContentKey ?>' >
                                        <article>
                                            <h3 class="SliderArticle__Title--hidden">Skill description</h3>
                                            <p><?= $sliderContent['content'] ?></p>
                                            <canvas>
                                                <img src='' alt=''/>
                                            </canvas>
                                        </article>
                                    </div>
                                    <?php endforeach ?>
                                    <?php endif ?>
                        </div>
                        <?php $SliderNbr ++; endforeach ?>
                    <div class='slider__Buttons'>
                        <?php foreach (CONFIG['slider']['slider1'] as $value):?>
                        <div class='Slider__button'>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 200 200" xml:space="preserve">
                                <title>slider Button</title>
                                <circle cx="100" cy="100" r="100" fill='#fff'/>
                            </svg>
                        </div>
                        <?php endforeach ?>
                    </div>
                <div class='SliderRight'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 200 200" xml:space="preserve">
                    <title>Right slider Button</title>
                    <line x1="10" y1="10" x2="190" y2="100" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round" stroke-linejoin="10"/>
                    <line x1="10" y1="190" x2="190" y2="100" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round" stroke-linejoin="10"/>
                </svg>
                </div>
            </section>
        <script src='dist/ts/index.js'></script>
    </body>
</html>