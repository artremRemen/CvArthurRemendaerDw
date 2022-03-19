<?php
    require_once('./src/php/config.php');
    $SliderNbr = 0;   
    $subskillsnbr = 0;
?>
<!DOCTYPE html>
<html lang="en">
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
    
    <body itemscope itemtype='https://schema.org/Person'>
        <header>
            <p class='warning'>Work in progress. / Copy site of spaceX for school work</p>
            <svg class='Header__BG' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 1920 1080" xml:space="preserve">
                <g class="Rocket">
                    <path class="st0" d="M1159.43,958.84c0,0-105.05-132.85-108.4-220.46s-2.2-350.89-2.05-443.54
                        c-3.35-87.81-88.84-154.79-88.84-154.79"/>
                    <path class="st0" d="M760.71,958.84c0,0,105.05-132.85,108.4-220.46s2.2-350.89,2.05-443.54C874.51,207.03,960,140.05,960,140.05"
                        />
                </g>
                <g class="Smoke">
                    <path d="M0,625.85c44.02-15.62,84.01-12.63,113.91,36.84c43.83-2.69,47.57,53.03,16.74,58.6v23.44
                        c28.46,12.75,41.95,30.16,46.88,50.23c26.1-6.38,44.28,1.79,56.93,20.09c17.53-7.27,29.16-2.06,35.16,15.07
                        c26.88-6.94,55.81,4.51,88.74,51.91c24.82-19.35,50.76-27.33,78.7-15.07c28.96-22.14,53.58,1.67,46.88,30.14l15.07,28.47h28.47
                        c44.32-28.95,73.77-20.21,92.09,16.74c29.74-20.38,56.19-24.28,77.02,0c25.31-19.98,44.75-13.74,60.28,10.05
                        c24.68-24.38,45.4-17.75,63.63,8.37l284.65-28.47c-5.02-28.47,46.88-43.53,55.26-8.37c-1.67-23.44,43.53-40.19,56.93-16.74
                        l45.21-15.07c-3.35-28.47,48.56-36.84,50.23-6.7c18.42-21.77,82.05-13.4,77.02,13.4c4.59-4.71,11.01-6.96,21.77-3.35l10.05-20.09
                        c5.51-23.59,14.62-32.28,50.23-40.19c25.12-11.72,100.24-18.11,90.42,8.37c36.48-44.53,72.28-64.28,107.16-50.23l48.56-33.49
                        c6.55-23.95,19.38-31.44,36.84-26.79l31.81-26.79c-8.82-50.42,12.67-86.35,55.26-112.19c-19.82-83.33,17.9-97.11,78.09-83.72V1080
                        H0L0,625.85z" fill="#F39200" />
                    <path d="M0,712.92c21.21-6.03,40.76,1.66,56.98,36.84c30.14-30.14,87.07,0,60.28,50.23
                        c30.25,15.7,38.17,39.57,31.81,68.65c36.95-1.64,61.07,8.75,77.02,26.79c43.52-20.39,82.84-10.46,117.21,35.16
                        c48.99-23.32,88.27-17.29,110.51,40.19c12.61-31.13,48.76-9.41,75.35,15.07c18-19.73,88.46-29.2,103.81,0
                        c10.81-9.04,20.97-9.77,30.14,2.23c26.05-45.31,58.26-48.98,95.44-18.98c22.39-11.74,42.48-13.39,60.28-5.02
                        c8.2-17.12,21.3-28.59,50.23-21.77c26.78-35.41,52.41-37.43,77.02-10.05c36.44-60.92,71.26-52.78,105.49-20.09
                        c24.7-4.55,42.99,0.65,51.91,20.09c19.38-4.81,38.29-7.58,53.58,5.02c41.1-26.9,71.7-22.13,92.09,13.4
                        c18.21-13.67,30.8-11.72,36.84,8.37c42.77-27.67,76.61-26.45,102.14,1.67c28.73-25.78,55.04-29.3,78.7-8.37
                        c8.53-59.53,59.57-74.3,107.16-41.86c34.13-50.89,76.86-57.46,123.91-41.86c14.66-22.69,37.88-33.28,72-28.47
                        c-3.87-21.48,6.91-44.94,31.81-70.33c-13.29-34.23-2.72-56.98,55.26-56.93c22.57-17.5,43.22-26.52,63.02-31.81V1080H0L0,712.92z" fill='#FBCB9A'/>
                    <path d="M0.27,804.92c54.91,25.78,87.64,71.36,100.52,134.62c25.05-1.56,41.4,12.66,51.64,37.94
                        c45.24-12.88,81.57-10.43,105.49,13.4c50.32-3.75,85.63,11.84,107.16,45.21c21.18-23.3,47.03-35.37,78.7-33.49
                        c27.63-20.46,59.91-9.01,65.3,26.79c18.42-11.72,40.19,6.7,21.77,25.12c52.81-30.58,88.21-31.93,103.81,0
                        c-1.91-31.06,78.7-33.49,82.05-15.07c6.75-8.77,27.98-34.54,60.28-15.07c16.11-16.84,38.1-20.19,61.95-21.77
                        c41.32-15.92,48.51-2.34,36.84,25.12c40.89-22.06,65.81-21.37,70.33,8.37c4.04-25.4,55.26-30.14,65.3-6.7
                        c-2.12-20.09,46.81-47.17,72-20.09c27.79-33.58,55.68-42.35,83.72-10.05c36.04-18.02,55.07-11.81,61.95,11.72
                        c16.35-17.72,39.8-20.71,66.98,6.7c6.39-17.21,65.3-28.47,77.02-6.7c8.7-13.01,46.01-17.43,43.53,13.4l23.44-16.74
                        c-3.89-45.34,45.21-55.26,60.28-30.14c5.59-37.24,78.44-29.69,70.33,11.72c12.33-24.88,38.86-40.99,95.44-38.51
                        c-1.48-20.85,9.67-29.39,41.86-17.58c12.95-27.33,30.49-33.05,58.6,0c11.01-37.98,30.14-58.67,58.6-59.44
                        c-9.68-45.85,14.04-75.28,58.6-94.45c2.86-27.77,16.57-32.42,36.23-24.43V1080H0.05L0.27,804.92z" fill='#FDE2CD'/>
                </g>
                <g class="Logos">
                    <g id="Logo__Html">
                        <path d="M894.56,267.75l12.84,132.84l51.91,15.63c0,0,50.79-14.51,52.47-14.51c1.67,0,13.95-133.95,13.95-133.95
                            H894.56z" fill ='#E45B0A'/>
                        <polygon points="960.14,278.91 1012.61,278.91 1003.12,394.45 960.14,405.05 		" fill='#ED6A3B'/>
                        <polygon class="st6" points="1000.89,294.84 999.21,311.03 936.14,311.03 937.82,327.96 997.72,328.34 993.07,378.56 
                            960.14,387.49 926.2,378.62 923.67,352.18 940.64,352.53 941.22,365.75 959.03,370.75 977.96,366.11 980.24,344.7 923.31,343.99 
                            918.66,294.84 		"/>
                    </g>
                    <g id="Logo__js">
                        <path d="M894.45,581.5l12.84,132.84l51.91,15.63c0,0,50.79-14.51,52.47-14.51s13.95-133.95,13.95-133.95H894.45z" fill='#E4C02B'/>
                        <polygon points="960.03,592.67 1012.49,592.67 1003,708.2 960.03,718.8 " fill='#FBD31A'/>
                        <polygon class="st6" points="940.17,608.65 955.12,608.65 954.89,700.45 915.41,689.94 915.41,674.76 940.64,681.53 		"/>
                        <polygon class="st6" points="965.4,608.65 1006.05,608.65 1004.41,623.13 979.42,623.13 979.42,648.13 1003.25,644.62 
                            998.81,691.81 965.4,700.45 965.4,685.97 987.05,679.5 988.76,660.74 965.4,664.95" fill='#E4C02B'/>
                    </g>
                    <g id="Logo__CSS">
                        <path d="M894.45,424.63l12.84,132.84l51.91,15.63c0,0,50.79-14.51,52.47-14.51s13.95-133.95,13.95-133.95H894.45z" fill='#2979B9'/>
                        <polygon points="960.03,435.79 1012.49,435.79 1003,551.32 960.03,561.93 		" fill='#54ACDE'/>
                        <polygon class="st6" points="918.91,450.56 1001.37,450.56 994.6,533.95 960.14,543.76 926.16,533.72 924.29,507.32 940.4,507.55 
                            941.57,521.1 959.09,526.01 977.78,521.57 979.18,500.31 941.34,500.55 940.4,483.26 981.05,483.73 982.58,467.81 920.09,467.36 
                                    "/>
                    </g>
                    <g id="Logo__php">
                        <path d="M894.45,738.38l12.84,132.84l51.91,15.63c0,0,50.79-14.51,52.47-14.51s13.95-133.95,13.95-133.95H894.45z" fill='#6A83B6'/>
                        <polygon points="960.03,749.54 1012.49,749.54 1003,865.08 960.03,875.68 		" fill='#96A1C5'/>
                        <polygon class="st6" points="918.03,766.34 999.52,766.34 998.12,782.53 989.47,797.88 996.73,797.88 996.17,815.18 979.7,815.18 
                            955.98,857.6 938.96,853.41 961.29,815.18 950.12,814.9 948.45,798.72 970.64,798.23 979.15,783.6 919.15,783.88 		"/>
                    </g>
                </g>
                <rect x="0" y="0" width="1920" height="1080" fill='000000' fill-opacity="0.25"/>
            </svg>
            <div class='Header__Title'>
                <h1><span itemprop='name'>ARTHUR</span> <span itemprop='familyName'>REMENDAER</span></h1>
                <p><span itemprop='jobTitle'>Web develloper </span > and <span itemprop='jobTitle'>designer</span> full stack</p>
            </div>
            <nav class='MainMenu'>
                <h2>Menu de navigation</h2>
                <ul class='menu'>
                    <li class=' menu__Ban'>
                        <a href="#" title="Top page">
                            <svg id="Calque_2" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 669.78 135.41">
                                <text>Artrem logo</text>    
                                <defs>
                                    <style>.cls-1,.cls-3{fill:#fff;}.cls-1,.cls-2,.cls-3{stroke:#006cb9;stroke-miterlimit:10;stroke-width:3px;}.cls-2{fill:none;}.cls-3{font-size:100px;font-family:UniversLTStd-BoldObl, Univers LT Std;font-weight:700;font-style:oblique;}.cls-4{letter-spacing:-0.03em;}</style>
                                </defs>
                                <polygon class="cls-1" points="172 104.62 197.82 104.55 224.55 29.41 197.97 29.41 172 104.62"/><path class="cls-1" d="M143.77,450.36c29.83.09,52.6-19.69,73.57-44.51h22.48l-13.77,38.09h26.22l30-84.44H329.5c12.16.09,17.9,5.37,17,16-4.49,14.95-24.75,19.46-39,25l17.84,38.83A14,14,0,0,0,333,444h31c9.5.16,14-5,15-12l-29.22.22L337,404c28.62-12.83,39.5-22.5,40.83-35.21,1.31-16.25-8.83-25.79-33.1-27.91H253.59l-44.38,53.25-24.89.33c-38,2.85-63.82,18-65.27,37C118.5,442.5,127.68,449.42,143.77,450.36ZM259.16,353l-15.75,41.09L227,394Zm-107.52,73c2.57-9.06,9.72-16.79,33.42-19.69H199C189,421,167,435,158,434,153,434,150.67,430.85,151.64,426.05Z" transform="translate(-93 -339.38)"/>
                                <polygon class="cls-2" points="134 54.62 150.41 54.75 166.16 13.66 134 54.62"/><path class="cls-2" d="M151.64,426.05c-1,4.8,1.36,7.95,6.36,7.95,9,1,31-13,40.95-27.64H185.06C161.36,409.26,154.21,417,151.64,426.05Z" transform="translate(-93 -339.38)"/>
                                <rect class="cls-1" x="1.5" y="120.12" width="653" height="13"/>
                                <text class="cls-3" transform="translate(289.48 106.91)">t<tspan class="cls-4" x="38.9" y="0">r</tspan><tspan x="74.8" y="0">em3w</tspan></text>
                            </svg>
                        </a>
                    </li>
                    <?php 
                        foreach (CONFIG['menu'] as $menu):
                            ?>
                    <li class='MainMenu__Links'><a href="<?= $menu['link'] ?>" title="<?= $menu['title'] ?>"><?= $menu['name'] ?></a></li>
                    <?php endforeach ?>
                </ul>
            </nav>
            <nav class="SubMenu">
                <h2>Sub menu</h2>
                <ul class='SubMenu__container'>
                    <li class='MainMenu__Links'><a href="./src/php/shop.php" title="" >Shop</a></li>
                    <li>
                        <input class='SubMenu__input' tabindex="-1" id='SubMenu__Button' tabindex="-1" name="SubMenu__Button" type='checkbox' />
                        <div></div>
                        <ul class='list__container'>
                            <?php 
                                foreach (CONFIG['menu'] as $menu):
                                    ?>
                            <li class='SubMenu__MainMenu'><a href="<?= $menu['link'] ?>" title="<?= $menu['title'] ?>"><?= $menu['name'] ?></a></li>
                            <?php endforeach ?>
                            <li class='SubMenu__MainMenu'><a href="" title="" >Shop</a></li>
                            <?php 
                                foreach (CONFIG['socials'] as $subMenu):
                                    ?>
                            <li><a href="<?= $subMenu['link'] ?>" title="<?= $subMenu['title'] ?>"><?= $subMenu['name'] ?></a></li>
                            <?php endforeach ?>
                        </ul>
                        <label for='SubMenu__Button'>
                            <svg class='Button__Image' version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                height= '100%' viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
                                <text>Submenu button</text>
                                <path class='Button__Image__Path1' d="M14.93,4.29H1.07C0.48,4.29,0,3.81,0,3.21v0c0-0.59,0.48-1.07,1.07-1.07h13.86c0.59,0,1.07,0.48,1.07,1.07v0
                                C16,3.81,15.52,4.29,14.93,4.29z" fill='#FFFFFF'/>
                                <path class='Button__Image__Path2' d="M14.93,9.07H1.07C0.48,9.07,0,8.59,0,8v0c0-0.59,0.48-1.07,1.07-1.07h13.86C15.52,6.93,16,7.41,16,8v0
                                C16,8.59,15.52,9.07,14.93,9.07z" fill='#FFFFFF'/>
                                <path class='Button__Image__Path3' d="M14.93,13.86H1.07C0.48,13.86,0,13.38,0,12.79v0c0-0.59,0.48-1.07,1.07-1.07h13.86c0.59,0,1.07,0.48,1.07,1.07
                                v0C16,13.38,15.52,13.86,14.93,13.86z" fill='#FFFFFF'/>
                            </svg>
                        </label>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <section class='Main__Chiffres'>
                <h2>quelques chiffres</h2>
                <div><div class='Chiffres'>0</div> <div>3D MODELS</div> </div>
                <div><div class='Chiffres'>0</div> <div>WEB SITES</div> </div>
                <div><div class='Chiffres'>0</div> <div>Branding créations</div> </div>
            </section >
            <section class='Main__about' id='about'>
                <h2>description</h2>
                <canvas class='Canvas__About'>

                </canvas>
                <p itemprop='description' itemprop='makesOffer'>
                I'm a young self-taught <span itemprop='jobTitle'>web developer</span> and able to evolve in all circumstances that it is <span itemprop='jobTitle'>front-end</span> and <span itemprop='jobTitle'>back-end</span>. I has in addition to his studies of <span itemprop='jobTitle'>web development</span> refine my abilities in the field of <span itemprop='makesOffer'>3D modeling</span> to be able to integrate some of its model to the sites he creates if necessary, without forgetting the fact that with my diploma of electrician he is able to detect most of the problems of computers and to solve them.
                </p>
            </section >
            <section class='Main__slider' id="skills">
                <h2>Slider</h2>
                <?php foreach(CONFIG['slider']['slider1'] as $sliderKey =>$SliderElement): 
                ?> 
                        <div class="slider__Container">
                            <div>
                                <p itemprop='name'>Arthur remendaer</p>
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
                                        if($sliderContent['content']): ?>
                                        <canvas class='canvas <?= $sliderKey  ?>'></canvas>
                                        <?php endif; 
                                        if (isset($sliderContent["subtitle"])) {
                                            for ($i=0; $i < count($sliderContent["subtitle"]); $i++):
                                                ?>
                                                    <input type="radio" tabindex="-1" id="<?= $sliderContent["subtitle"][$i] ?>" name="<?= $sliderKey  ?>" <?php if ($i === 0){ echo "checked";}?>>
                                                    <label for="<?= $sliderContent["subtitle"][$i] ?>"><?= $sliderContent["subtitle"][$i] ?></label>
                                                <?php
                                            endfor;
                                        }
                                    ?>
                                    <div class='<?= $sliderContentKey ?>' >
                                        <article>
                                                    <h3 class="SliderArticle__Title--hidden"> <?= $sliderContentKey ?> description</h3>
                                            <p><?= $sliderContent['content'] ?></p>
                                            <canvas>
                                                <img src='#' alt='descrImg'/>
                                            </canvas>
                                        </article>
                                    </div>
                                    <?php endforeach ?>
                                    <?php endif ?>
                            </div>
                        </div>
                        <?php $SliderNbr ++; endforeach ?>
            </section>
            <section class='Main__Videos' id='videos'>
                <div class='Videos__container'>
                    <div class='Video__Container--resize'>
                        <h2>Video</h2>
                        <p>Arthur in action</p>
                    </div>
                    <div class='Videos__PlayerButton'>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 200 200" xml:space="preserve">
                            <title>Play button</title>
                            <polygon points="10,10 90,55 10,100" fill='white' stroke-width='10' stroke-linejoin="round" stroke="white"/>
                        </svg>
                    </div>
                </div>
                <input type='checkbox' tabindex="-1" name='showVideos' id='showVideos'>
                <label for='showVideos' class='Container__showPlayer'></label>
                <div class='Videos__videosPlayer'>
                    <label for='showVideos'>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 200 200" xml:space="preserve">
                            <title>Close window</title>
                            <line x1="10" y1="10" x2="100" y2="100" stroke="white" stroke-linecap="round" stroke-width="10"/>
                            <line x1="100" y1="10" x2="10" y2="100" stroke="white" stroke-linecap="round" stroke-width="10"/>
                        </svg>
                    </label>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/XhepwtKR5lg" title="YouTube video player" frameborder="0"></iframe>
                    <p>arthur in coding</p>
                </div>
            </section>
            <section class='Main__Subskills' id='subskills'>
                <div class='Subskills__Cat'>
                    <h2>Subskill</h2>
                    <p>Sub skills</p>
                    <?php foreach (CONFIG['subskills'] as $SubskillsKey => $SubskillsElement):?>
                        <input tabindex="-1" type="radio" id="<?= $SubskillsKey ?>" name="subskill" value="" <?php if ($subskillsnbr === 0){ echo "checked";}?>>
                        <label for="<?= $SubskillsKey?>"><?= $SubskillsKey ?></label>
                        
                    <?php $subskillsnbr++; endforeach; ?>
                    <div>
                        <?php foreach (CONFIG['subskills'] as $SubskillsKey => $SubskillsElement):?>
                            <p class='Subskills__content <?= $SubskillsKey ?>'>
                            <?= $SubskillsElement ?>
                            </P>
                            <?php $subskillsnbr++ ?>
                        <?php endforeach; ?>
                    </div>
                </div>
            </section>
            <section class='Main__Projects' id='Projects'>
                <h2>Mes projetx</h2>
                <?php foreach (CONFIG['projects'] as $ProjectElement):
                ?>
                <div class='slider__Projects'>
                    <a href='<?= $ProjectElement['link']?>' title='<?= $ProjectElement['alt']?>' ><img src='/src/img/<?= $ProjectElement['img']?>' width='<?= $ProjectElement['ImgWidth']?>' height='<?= $ProjectElement['ImgHeight']?>' alt='<?= $ProjectElement['alt']?>'></a>
                    <p><?= $ProjectElement['description']?></p>
                </div>
                <?php endforeach ?>
            </section>
            <section class='Main__download'>
                <h2>Download</h2>
                <div class='line'></div>
                <p>For information about <span>Arthur Remendaer</span></p>
                <div class='Download__Container'>
                    <a href='/src/img/Cv.pdf'>Download my Cv</a>
                    <input type='checkbox' name='mail' id='Contact__MailInput'/>
                    <label for='Contact__MailInput' class='Download__FormButton'>Contact me</label>
                    <form class='contactForm' action='#' method='post'>
                        <label for='Contact__MailInput' class='Contact__Mailoutput'>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 200 200" xml:space="preserve">
                                <title>Close window</title>
                                <line x1="10" y1="10" x2="100" y2="100" stroke="white" stroke-linecap="round" stroke-width="10"/>
                                <line x1="100" y1="10" x2="10" y2="100" stroke="white" stroke-linecap="round" stroke-width="10"/>
                            </svg>
                        </label>
                        <fieldset>
                            <legend>Formulaire de contact</legend>
                            <div class='Form__Name'>
                                <label for='contactName'>Name</label>
                                <input type='text' id='contactName' name='Name' placeholder='Arthur Remendaer' />
                            </div>
                            <div class='Form__Mail'>
                                <label for='contactmail'>Your Email addresse</label>
                                <input type='text' id='contactmail' name='mail' placeholder='Artrem3Dweb@gmail.com' />
                            </div>
                            <div class='Form__Message'>
                                <label for='contactMessage'>Your message</label>
                                <textarea id='contactMessage' name='Content'></textarea>
                            </div>
                            <input type='submit' value='send email' />
                        </fieldset>
                    </form>
                </div>
            </section>
        </main>
        <footer>
            <p>artrem &copy; 2022</p>
            <ul>
                <?php 
                    foreach (CONFIG['socials'] as $subMenu):
                        ?>
                <li><a href="<?= $subMenu['link'] ?>" title="<?= $subMenu['title'] ?>"><?= $subMenu['name'] ?></a></li>
                <?php endforeach ?>
            </ul>
        </footer>
        <script src='dist/ts/index.js'></script>
    </body>
</html>