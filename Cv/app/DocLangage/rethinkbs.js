//npm install rethinkdb             //installer le module RDB

r= require('rethinkdb')             //appeller le module RDB

r.connect({host:'localhost', port:'8080'}, (err, conn)=>{       //effectuer la connxion au serveur 
    if(err) throw err
  r.db('nomDB').tableCreate('tableDB').run(conn, function(err, res) {   //va lancer le serveur sur la table tous ce qui se trouve entre les parentheses de run servent juste a la vérification d'erreure
    if(err) throw err
    console.log(res)
  })
  r.dbcreate('nomdb').run(connect)                                       //création de la base de donnée (mettre la connexion a la DB a l'interieur de la parenthese du run)

  r.db('nomdb').tableCreate('nomtable').run(connect)                       //création de la table apres création de la db 

  r.table('nomtable').insert({case1: 'val1', case2:'val2'},{case1: 'val1', case2:'val2'}).run()         //insertion de donnée dans la table sélectionner 

  r.table('nomtable').run()                 //récuperer toutes les données de la table

  r.table('nomtable').count().run()                 //compte toutes les données de la table(peut etre ajouter a un filtre)

  r.table('nomtable').limit(5).run()               //récuperer toutes les données de la table en limitant le nombre de réponse au nombre dans la parenthese 

  r.table('nomtable').filter(r.row('case').eq('val')).run()      //selectionner toutes les infos de la tables qui on les valeurs idéntiques dans la case

  r.table('nomtable').filter(r.row['case'] > 30).run()          //selectionner toutes les infos de la tables qui on les valeurs idéntiques dans la case et qui sont en dessous de la valeur indiqué

  r.table('nomtable').update({case:'val'}).run()                  //ajouter ou changer une valeure de la table

  r.table('nomtable').delete().run()                              //suprimer toutes les donées de la base(les données filtrées si on leurs appliquent un filtre)

  r.table('nomtable').tableDrop('nomtable').run()                 //suprimer la table de la DB
  
  r.dbdrop('nomdb').run()                                         //suprimer la DB 

  r.db('nomdb').table('nomtable').get('cleprimaire').run()          //récuperer la valeur par la clé primaire si on la connait       
  
  r.table('nomtable').getAll("val1", "val2", ['val1', 'val2'], {index: "case"})             //récuperer toutes les entrées dont la valeurs dans la case est identiques

  r.table('nomtable').orderBy({index:'case'}).run()                 //trier toutes les valeurs par l'index
})

