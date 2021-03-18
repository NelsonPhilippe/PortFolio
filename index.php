<?php

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <title>PortFolio</title>
    <link rel="stylesheet" href="style.css">
    <script  src="index.js"></script>
</head>

<body>


    <div class="container">

        <header>
            <div id="nav">

                <a href="#home"><img src="images/home.png" alt="home"></a>
                <a href="#competence"><img src="images/pencil.png" alt="competences"></a>
                <a href="#presentation"><img src="images/paper.png" alt="presentation"></a>
                <a href="#project"><img src="images/project.png" alt="project"></a>

            </div>
        </header>

        <scroll-container>
            <scroll-page id="home">

                <div class="home">

                    <label for="contact">Contactez Moi!</label>
                    <input type="button" id="contact" name="contact">


                    <img src="images/back_home.jpg" alt="">

                    <h1>Nelson Philippe</h1>
                    <h2>Un étudiant, avec une soif d'apprendre inssaciable,
                        le développement est sa passion.
                    </h2>


                </div>

            </scroll-page>
            <scroll-page id="competence">
                <div class="competence">

                    <h1>Compétence</h1>


                    <div id="container_c">

                        <div class="c_title">



                            <div>
                                <h3>JAVA</h3>
                                <h3>HTML & CSS</h3>
                                <h3>PHP</h3>
                                <h3>JAVASCRIPT</h3>

                            </div>



                        </div>

                        <div id="barre"></div>


                        <div id="graph">



                            <div id="java"></div>

                            <div id="htmlcss"></div>

                            <div id="php"></div>

                            <div id="javascript"></div>



                        </div>

                    </div>

                </div>


            </scroll-page>

            <scroll-page id="presentation">

                <div class="presentation">

                    <h1>Presentation</h1>

                    <p id="p_1">Je me nomme Nelson Philippe, j'ai 18 ans actuelement en terminal, 
                        je suis passioné par le développement et tout ce qui peut toucher à l'informatique en général.
                        Après mes études j'aimerai devenir développeur et avoir le plus de connaissances possibles en rapport
                        avec le métier, mon but est d'avoir des connaissances dans n'importe quelle language de programation.
                    </p>
                    <p id="p_2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, molestiae tenetur?
                        Voluptatem exercitationem ipsum dolores quasi. Odio laborum necessitatibus odit neque ipsum
                        eveniet sequi asperiores quod, ducimus nam aliquam voluptatum.</p>

                </div>


            </scroll-page>

            <scroll-page id="project">

                <div class="project">

                    <h1>Projet</h1>

                    <div class="container_project">

                        <div id="pr_1">
                            <h3>Projet 1</h3>
                            <img src="images/discord.jpg" alt="">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi aliquid nulla excepturi voluptate, eius dignissimos, nam, aspernatur quos aperiam voluptatibus iste libero quo at odio impedit dolorum debitis iure recusandae?</p>
                        </div>

                        <div id="pr_2">
                            <h3>Projet 2</h3>
                            <img src="images/discord.jpg" alt="">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi aliquid nulla excepturi voluptate, eius dignissimos, nam, aspernatur quos aperiam voluptatibus iste libero quo at odio impedit dolorum debitis iure recusandae?</p>

                        </div>

                        <div id="pr_3">
                            <h3>Projet 3</h3>
                            <img src="images/discord.jpg" alt="">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi aliquid nulla excepturi voluptate, eius dignissimos, nam, aspernatur quos aperiam voluptatibus iste libero quo at odio impedit dolorum debitis iure recusandae?</p>

                        </div>

                    </div>

                </div>

            </scroll-page>
        </scroll-container>



    </div>




</body>

</html>


