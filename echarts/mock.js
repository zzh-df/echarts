import Mock from 'mockjs'

const data=Mock.mock('mockjs',{
    'echartDate|200':[
       {
            'url|1':[`/static/img/1.jpg`,`/static/img/2.jpg`,`/static/img/3.jpg`,`/static/img/4.jpg`,`/static/img/5.jpg`,
            `/static/img/6.jpg`,`/static/img/7.jpg`,`/static/img/8.jpg`,`/static/img/9.jpg`,`/static/img/10.jpg`,`/static/img/11.jpg`,
            `/static/img/12.jpg`,`/static/img/13.jpg`,`/static/img/14.jpg`,`/static/img/15.jpg`,`/static/img/16.jpg`,
            `/static/img/17.jpg`,`/static/img/18.jpg`,`/static/img/19.jpg`,`/static/img/20.jpg`,`/static/img/21.jpg`,
            `/static/img/22.jpg`,`/static/img/23.jpg`,`/static/img/24.jpg`,`/static/img/25.jpg`,`/static/img/26.jpg`,
            `/static/img/27.jpg`,`/static/img/28.jpg`,`/static/img/24.jpg`,`/static/img/25.jpg`],
            
            'title|+1':['落落','慕容',"晓月","愉悦","沫沫","小雪",'梅梅',"晓东","知画","晓晓","依依",'欧华',
            '潇潇','夏至',"妖妖","瑶瑶","莫雨","关关",'花落',"夕阳","叶叶","荷叶","茜茜",'璐瑶','夕阳月',
            '茉莉花','花落',"小薇","泓宇","小满","兰兰",'嫣红',"果果","姚姚","庆洁","何意",'妮妮','悦华',
            '宝宝','body',"dream","love","思思","倪妮",'荷月',"玥玥","丹丹","小米","花花",'毕悦','霓凰'],

            'id|10000-100000000':100001,
            'desc|+1':['正在推广...'],

            data:{
                'fens|8':[
                    {'time|+1':['6-01','6-02','6-03','6-04','6-05','6-06','6-07','6-08'],
                    'value|10-100':100}
                ],
                'friend|7':[
                    {'time|+1':['6-01','6-02','6-03','6-04','6-05','6-06','6-07'],
                    'value|10-100':100},
                ],
                'yestersay|12':[
                    {'name|+1':[
                        '00:00-02:00','02:00-04:00','04:00-06:00','06:00-08:00','08:00-10:00','10:00-12:00',
                        '12:00-14:00','14:00-16:00','16:00-18:00','18:00-20:00','20:00-22:00','22:00-24:00'
                    ],
                    'value|120-850':100}
                ],
                'liked|9':[
                    {
                        'time|+1':['6-01','6-02','6-03','6-04','6-05','6-06','6-07','6-08','6-09'],
                        'value|100-500':100
                },
                    
                ]
            }
       } 
    ]
})


export default data;