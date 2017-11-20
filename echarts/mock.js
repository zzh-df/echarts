import Mock from 'mockjs'

const data=Mock.mock('mockjs',{
    'echartDate|200':[
       {
            'url|1':[`/echarts/img/1.jpg`,`/echarts/img/2.jpg`,`/echarts/img/3.jpg`,`/echarts/img/4.jpg`,`/echarts/img/5.jpg`,
            `/echarts/img/6.jpg`,`/echarts/img/7.jpg`,`/echarts/img/8.jpg`,`/echarts/img/9.jpg`,`/echarts/img/10.jpg`,`/echarts/img/11.jpg`,
            `/echarts/img/12.jpg`,`/echarts/img/13.jpg`,`/echarts/img/14.jpg`,`/echarts/img/15.jpg`,`/echarts/img/16.jpg`,
            `/echarts/img/17.jpg`,`/echarts/img/18.jpg`,`/echarts/img/19.jpg`,`/echarts/img/20.jpg`,`/echarts/img/21.jpg`,
            `/echarts/img/22.jpg`,`/echarts/img/23.jpg`,`/echarts/img/24.jpg`,`/echarts/img/25.jpg`,`/echarts/img/26.jpg`,
            `/echarts/img/27.jpg`,`/echarts/img/28.jpg`,`/echarts/img/24.jpg`,`/echarts/img/25.jpg`],
            
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