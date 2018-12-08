Search.setIndex({docnames:["defining_queries","driver_adapters","getting_started","index","install","source/aiosql","source/aiosql.adapters","source/aiosql.adapters.aiosqlite","source/aiosql.adapters.asyncpg","source/aiosql.adapters.psycopg2","source/aiosql.adapters.sqlite3","source/aiosql.aioctxlib","source/aiosql.aiosql","source/aiosql.exceptions","source/aiosql.patterns","source/modules","upgrading"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:55},filenames:["defining_queries.rst","driver_adapters.rst","getting_started.rst","index.rst","install.rst","source/aiosql.rst","source/aiosql.adapters.rst","source/aiosql.adapters.aiosqlite.rst","source/aiosql.adapters.asyncpg.rst","source/aiosql.adapters.psycopg2.rst","source/aiosql.adapters.sqlite3.rst","source/aiosql.aioctxlib.rst","source/aiosql.aiosql.rst","source/aiosql.exceptions.rst","source/aiosql.patterns.rst","source/modules.rst","upgrading.rst"],objects:{"":{aiosql:[5,0,0,"-"]},"aiosql.SQLOperationType":{INSERT_RETURNING:[5,2,1,""],INSERT_UPDATE_DELETE:[5,2,1,""],INSERT_UPDATE_DELETE_MANY:[5,2,1,""],SCRIPT:[5,2,1,""],SELECT:[5,2,1,""]},"aiosql.adapters":{aiosqlite:[7,0,0,"-"],asyncpg:[8,0,0,"-"],psycopg2:[9,0,0,"-"],sqlite3:[10,0,0,"-"]},"aiosql.adapters.aiosqlite":{AioSQLiteAdapter:[7,1,1,""]},"aiosql.adapters.aiosqlite.AioSQLiteAdapter":{execute_script:[7,3,1,""],insert_returning:[7,3,1,""],insert_update_delete:[7,3,1,""],insert_update_delete_many:[7,3,1,""],is_aio_driver:[7,2,1,""],process_sql:[7,3,1,""],select:[7,3,1,""],select_cursor:[7,3,1,""]},"aiosql.adapters.asyncpg":{AsyncPGAdapter:[8,1,1,""],MaybeAcquire:[8,1,1,""]},"aiosql.adapters.asyncpg.AsyncPGAdapter":{execute_script:[8,3,1,""],insert_returning:[8,4,1,""],insert_update_delete:[8,4,1,""],insert_update_delete_many:[8,4,1,""],is_aio_driver:[8,2,1,""],maybe_order_params:[8,4,1,""],process_sql:[8,4,1,""],select:[8,4,1,""],select_cursor:[8,4,1,""]},"aiosql.adapters.psycopg2":{PsycoPG2Adapter:[9,1,1,""],replacer:[9,5,1,""]},"aiosql.adapters.psycopg2.PsycoPG2Adapter":{execute_script:[9,3,1,""],insert_returning:[9,3,1,""],insert_update_delete:[9,3,1,""],insert_update_delete_many:[9,3,1,""],process_sql:[9,3,1,""],select:[9,3,1,""],select_cursor:[9,3,1,""]},"aiosql.adapters.sqlite3":{SQLite3DriverAdapter:[10,1,1,""]},"aiosql.adapters.sqlite3.SQLite3DriverAdapter":{execute_script:[10,3,1,""],insert_returning:[10,3,1,""],insert_update_delete:[10,3,1,""],insert_update_delete_many:[10,3,1,""],process_sql:[10,3,1,""],select:[10,3,1,""],select_cursor:[10,3,1,""]},"aiosql.aioctxlib":{aiocontextmanager:[11,5,1,""]},"aiosql.aiosql":{Queries:[12,1,1,""],SQLOperationType:[12,1,1,""],from_path:[12,5,1,""],from_str:[12,5,1,""],get_driver_adapter:[12,5,1,""],load_methods:[12,5,1,""],load_queries_from_dir_path:[12,5,1,""],load_queries_from_file:[12,5,1,""],load_queries_from_sql:[12,5,1,""],register_driver_adapter:[12,5,1,""]},"aiosql.aiosql.Queries":{add_child_queries:[12,4,1,""],add_query:[12,4,1,""],available_queries:[12,2,1,""]},"aiosql.aiosql.SQLOperationType":{INSERT_RETURNING:[12,2,1,""],INSERT_UPDATE_DELETE:[12,2,1,""],INSERT_UPDATE_DELETE_MANY:[12,2,1,""],SCRIPT:[12,2,1,""],SELECT:[12,2,1,""]},"aiosql.exceptions":{SQLLoadException:[13,6,1,""],SQLParseException:[13,6,1,""]},"aiosql.patterns":{doc_comment_pattern:[14,7,1,""],empty_pattern:[14,7,1,""],query_name_definition_pattern:[14,7,1,""],valid_query_name_pattern:[14,7,1,""],var_pattern:[14,7,1,""]},aiosql:{SQLOperationType:[5,1,1,""],adapters:[6,0,0,"-"],aioctxlib:[11,0,0,"-"],aiosql:[12,0,0,"-"],exceptions:[13,0,0,"-"],from_path:[5,5,1,""],from_str:[5,5,1,""],patterns:[14,0,0,"-"],register_driver_adapter:[5,5,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","staticmethod","Python static method"],"4":["py","method","Python method"],"5":["py","function","Python function"],"6":["py","exception","Python exception"],"7":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:staticmethod","4":"py:method","5":"py:function","6":"py:exception","7":"py:data"},terms:{"abstract":16,"class":[1,5,7,8,9,10,12,16],"default":0,"enum":[5,12],"function":[0,1,5,7,10,12],"import":[2,3,5,12],"new":[0,1,5,12],"null":0,"return":[1,3,5,7,10,12],"static":[7,8,9,10],"true":[7,8],Adding:0,But:3,For:[2,5,12],The:[0,2,5,7,10,12],These:0,Will:[0,3],With:3,_cursor:16,_op_typ:[7,8,9,10],_query_nam:[7,9,10],abl:[2,3],about:0,abov:0,accept:[2,10],access:[0,2],accessor:12,act:16,actual:0,adapt:[3,5,12,15,16],adapter_factori:[1,5,12],add:[1,4,12],add_child_queri:12,add_queri:12,added:0,addit:[5,7,12],after:[2,5,12],against:0,aiocontextmanag:[11,16],aioctxlib:[5,15,16],aiosql:[0,2,4,16],aiosqlit:[2,3,5,6],aiosqliteadapt:7,all:[0,2,3,5,12,16],allow:0,aloha:[2,3],alreadi:[7,10],also:[0,2,3,10,16],alter:0,alwai:0,ani:[0,3,7],anosql:3,api:[0,3,16],appli:0,applic:[0,3],approach:16,arg:0,argument:[1,5,12],around:16,async:[2,3],asynccontextmanag:16,asyncio:[2,3],asyncpg:[3,5,6],asyncpgadapt:8,avail:[2,12],available_queri:12,await:[2,3],awar:16,back:0,bad:16,base:[3,5,7,8,9,10,12,13,16],basic:0,becaus:[7,10],befor:[7,10],below:[0,1,2],besid:0,bit:2,block:0,blog:[0,16],blogid:0,both:[0,2],box:3,build:[1,5,12],built:12,builtin:1,bulk:0,bulk_publish:0,call:[0,3],callabl:[5,12],can:[0,1,2,3,5,7,12,16],charact:0,child:12,child_nam:12,child_queri:12,claus:0,client:8,close:2,code:[0,3,14],column:[2,16],command:0,comment:[3,12,14],commun:2,compil:14,complet:16,conn:[0,1,2,3,5,7,8,9,10,12],connect:[2,3],constructor:[1,5,12],contain:[2,5,12],content:[0,12,15],context:16,contextmanag:[1,5,12,16],control:[3,16],creat:[0,5,12],create_schema:0,cur:0,current_d:0,cursor:16,custom:[5,12],data:[0,2],databas:[0,2,3,5,12,16],date:0,datetim:0,db_driver:[1,2,3,5,12],dblquot:14,declar:0,decor:16,def:[1,2,3,5,12],defin:3,definit:[0,2,12,14],detail:[0,5,12,16],determin:[0,12],dict:[3,5,12],dictionari:16,differ:2,dir_path:12,directori:[5,12],doc_comment_pattern:14,document:[0,5,12],doesn:7,don:0,dot:12,driver:[0,2,3,5,7,10,12,16],driver_adapt:[1,5,12,16],driver_nam:[1,5,12],duck:[1,16],dynam:12,dynamicattr:12,each:[0,2],earth:2,easi:2,either:[5,12],empti:14,empty_pattern:14,end:0,enforc:14,enumer:[5,12],everi:0,exampl:[0,2,5,12,16],except:[5,15],execut:[2,5,12],execute_script:[1,5,7,8,9,10,12],executemani:0,exist:[5,12],expect:0,expos:16,extend:[3,5,12,16],featur:16,fetch:0,field:0,file:[2,3,5,12],file_path:12,first:0,firstnam:0,follow:[0,1],foo:[1,5,12],foreign:0,format:7,found:[0,12],from:[0,2,3,5,12],from_path:[0,2,3,5,12,16],from_str:[5,12,16],full:16,func:11,gather:[2,3],gener:0,get:[0,3,5,12,16],get_all_blog:0,get_all_greet:[2,3,5,12],get_driver_adapt:12,get_greet:2,get_user_blog:0,get_users_by_usernam:[3,5,12],get_worlds_by_nam:2,great:1,greet:[2,3,5,12],greeting_id:[2,3],greeting_row:2,group:12,handl:[5,7,10,12],has:0,have:[0,16],hei:0,held:2,help:[0,3],hola:[2,3],how:[0,1,5,12,16],howev:0,identifi:14,index:3,indic:[2,16],inform:0,insert_return:[1,5,7,8,9,10,12],insert_update_delet:[1,5,7,8,9,10,12],insert_update_delete_mani:[1,5,7,8,9,10,12],instal:3,instanc:[1,5,12],instead:16,instruct:1,integ:0,interfac:[1,16],is_aio_driv:[7,8],just:16,kei:[0,16],kwarg:0,lack:0,lastnam:0,lastrowid:0,lead:14,let:[0,2,16],leverag:[2,16],like:[0,2,3],line:14,link:[5,12],list:[0,12,16],littl:2,load:[0,2,3,5,12],load_method:12,load_queri:16,load_queries_from_dir_path:12,load_queries_from_fil:12,load_queries_from_sql:12,load_queries_from_str:16,loader:[5,12],locat:2,longer:16,look:1,mai:1,main:[2,3],make:[1,2,5,12,16],manag:16,map:0,match:9,maybe_order_param:8,maybeacquir:8,mean:[0,16],meant:0,method:[0,2,3,12,16],minim:2,modul:[0,3,15],more:16,most:[0,16],multipl:0,mydb:[1,5,12],mydbadapt:[1,5,12],name:[1,2,3,5,7,10,12,14,16],necessari:0,need:[0,7,16],newli:0,next:0,none:[0,5,12],normal:0,note:10,now:16,object:[0,2,3,7,8,9,10,12],often:0,older:3,onc:0,one:16,op_typ:[1,5,12],opear:0,oper:[3,5,7,10,12],order:0,organ:3,origin:[7,10],other:[0,3],our:[2,16],out:3,output:[0,16],over:16,own:[1,16],packag:[3,15],page:3,parallel:[2,3],paramet:[0,1,5,7,8,9,10,12],parmet:9,part:16,pass:[1,5,7,10,12],path:[5,12],pattern:[5,15],perform:[0,7,10],pip:4,place:1,pleas:3,poetri:4,postgresql:[0,3],primari:0,print:2,process:[7,10],process_sql:[1,5,7,8,9,10,12],program:2,project:3,properti:12,provid:16,psql:3,psycopg2:[0,3,5,6],psycopg2adapt:9,publish:0,publish_blog:0,python:[0,2,14],qmark:10,queri:[2,3,5,7,10,12,16],queries2:[5,12],query_load:12,query_nam:[8,12],query_name_definition_pattern:14,queryload:16,quot:14,rather:2,receiv:0,record:[2,16],refer:0,regist:[1,5,12],register_driver_adapt:[1,5,12,16],register_query_load:16,relat:3,remov:0,remove_blog:0,replac:9,requir:0,respons:16,restrict:3,result:[0,2],row:[0,2,16],row_factori:2,run:[0,2,3],schema:0,script:[5,12],search:3,section:0,see:[1,3,5,12],select:[0,1,2,3,5,7,8,9,10,12],select_cursor:[1,5,7,8,9,10,12],self:[1,5,12],separ:12,sequenc:0,setup:0,should:[0,3,16],simpler:16,some:0,sometim:0,sourc:1,special:0,specifi:2,sql:[1,2,5,7,8,9,10,12,14],sql_dir:[5,12],sql_path:[5,12],sql_text:[5,12],sqlite3:[0,2,3,5,6,12],sqlite3driveradapt:10,sqlite:[0,2,3],sqlloadexcept:13,sqloperationtyp:[5,7,10,12],sqlparseexcept:13,standard:3,start:[0,1,3],statement:3,stdlib:2,str:[5,7,10,12],string:[5,12],style:[10,16],sub:12,submodul:15,subpackag:15,substitut:0,support:[1,3],symbol:0,syntax:10,tabl:0,take:[1,5,12],tell:[0,2],text:[0,7,10],than:2,them:[0,2,3],thi:[0,3,12,16],thing:16,those:16,through:[7,10],titl:0,todo:[1,5,12],tool:3,trail:[0,14],tupl:2,type:[1,2,5,7,10,12,14,16],unchang:[7,10],under:[2,12],underscor:0,unus:10,usag:[5,12],use:[0,1,2,3,4,5,12,16],usecas:0,used:[7,10],useful:0,user:[0,3,5,12,16],user_id:3,userid:0,usernam:[0,3,5,12],using:[0,2,3,16],valid:[0,14],valid_query_name_pattern:14,valu:0,var_nam:[7,10,14],var_pattern:14,variabl:[0,10,14],version:3,via:[0,2],want:3,what:[12,16],when:[0,5,12],where:[0,2,3,5,12],which:[0,1,2,3,5,12,16],willvaughn:[3,5,12],without:0,word:0,world:2,world_id:2,world_nam:2,world_row:2,would:[2,3],write:[0,1,3],written:[7,10],you:[0,1,3,4,5,12,16],your:[0,1,3,5,12]},titles:["Defining SQL Queries","Extending aiosql to additional database drivers","Getting Started","aiosql - Simple SQL in Python","Install","aiosql package","aiosql.adapters package","aiosql.adapters.aiosqlite module","aiosql.adapters.asyncpg module","aiosql.adapters.psycopg2 module","aiosql.adapters.sqlite3 module","aiosql.aioctxlib module","aiosql.aiosql module","aiosql.exceptions module","aiosql.patterns module","aiosql","Upgrading from 1.x to 2.x"],titleterms:{"return":0,adapt:[1,6,7,8,9,10],addit:1,aioctxlib:11,aiosql:[1,3,5,6,7,8,9,10,11,12,13,14,15],aiosqlit:7,asyncpg:8,comment:0,content:[3,5,6],databas:1,defin:0,delet:0,driver:1,exampl:3,except:13,execut:0,extend:1,from:16,get:2,indic:3,insert:0,instal:4,mani:0,modul:[5,6,7,8,9,10,11,12,13,14],name:0,oper:0,packag:[5,6],pattern:14,psycopg2:9,python:3,queri:0,quick:3,script:0,simpl:3,sql:[0,3],sqlite3:10,start:2,statement:0,submodul:[5,6],subpackag:5,tabl:3,updat:0,upgrad:16}})