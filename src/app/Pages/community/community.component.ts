import { Component, OnInit } from '@angular/core';

export interface qstns{
  Qstn:string;
  Qstnid:string;
  Postedby:string;
  time:string;
  like:number;
  prifile:string;
  comments:comment[];
}
interface comment{
  commentby:string;
   time:string;
   comment:string;
   profile:string;
}
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  Qstn; qstns:qstns[];Replay;myqstns:qstns[];Suggestedqstns:string[];
  constructor() { }

  ngOnInit(): void {
    this.loadqstn()
    this.loadmyqstn();
    this.Funsuggestedqsn();
  }

  //genral qstns
  loadqstn(){
      this.qstns=[
        {
        Qstn:"Elavita veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
        Qstnid:"1",
        Postedby:"Vikash smith",
        time:"3 hours ago",
        like:2,
        prifile:"https://bootdey.com/img/Content/avatar/avatar7.png",
        comments:[{
          commentby:"Jamara Karle",
          time:"1 hour ago",
          comment:"Xullamco laboris nisi ut aliquip ex eacommodo consequat." ,
          profile:"https://bootdey.com/img/Content/avatar/avatar7.png"
        },
        {
          commentby:"Jamara Karle",
          time:"1 hour ago",
          comment:"Xullamco laboris nisi ut aliquip ex eacommodo consequat." ,
          profile:"https://bootdey.com/img/Content/avatar/avatar7.png"
        }
      ]

        },
        {
          Qstn:"Elavita veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
          Postedby:"Vikash smith",
          Qstnid:"2",
          time:"3 hours ago",
          like:2,
          prifile:"https://bootdey.com/img/Content/avatar/avatar7.png",
          comments:[{
            commentby:"Jamara Karle",
            time:"1 hour ago",
            comment:"Xullamco laboris nisi ut aliquip ex eacommodo consequat." ,
            profile:"https://bootdey.com/img/Content/avatar/avatar7.png"
          },
          {
            commentby:"Jamara Karle",
            time:"1 hour ago",
            comment:"Xullamco laboris nisi ut aliquip ex eacommodo consequat." ,
            profile:"https://bootdey.com/img/Content/avatar/avatar7.png"
          }
        ]
  
          }
      ]
    }
   //user asked qstns
    loadmyqstn(){
      this.myqstns=[
        {
        Qstn:"Elavita veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
        Qstnid:"12",
        Postedby:"Vikash smith",
        time:"3 hours ago",
        like:2,
        prifile:"https://bootdey.com/img/Content/avatar/avatar7.png",
        comments:[{
          commentby:"Jamara Karle",
          time:"1 hour ago",
          comment:"Xullamco laboris nisi ut aliquip ex eacommodo consequat." ,
          profile:"https://bootdey.com/img/Content/avatar/avatar7.png"
        },
        {
          commentby:"Jamara Karle",
          time:"1 hour ago",
          comment:"Xullamco laboris nisi ut aliquip ex eacommodo consequat." ,
          profile:"https://bootdey.com/img/Content/avatar/avatar7.png"
        }
      ]

        }
       
      ]
    }
  //
  Funsuggestedqsn(){
    this.Suggestedqstns =["qstn1 hhdvdhv dbgvdgvd ","qstn1 hhdvdhv dbgvdgvd ","qstn1 hhdvdhv dbgvdgvd ","qstn1 hhdvdhv dbgvdgvd "]
  }
  //send qstn
  QstnSubmit() {
    alert(this.Qstn)
  }
  //filetr tye comment
  Commentfilter(value:string) {
    alert(value)
  }
  //replay submit
  replaySubmit(qstnid){
       alert(qstnid + "  "+ this.Replay)
  }
  //get replay data
  commentblurEvent(event: any){
    this.Replay = event.target.value;

  }

}
