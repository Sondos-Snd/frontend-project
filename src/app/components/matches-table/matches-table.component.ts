import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matches:any=[]
  constructor( private router:Router , private mService:MatchesService ) { }
  ngOnInit(): void {
    this.getAllMatches()
  }

  getAllMatches(){   
    // this.matches= JSON.parse( localStorage.getItem('matches') || '[]') 
    
    this.mService.getAllMatches().subscribe((result)=>{

      this.matches=result

    })
  }
  navigateTo(path:any, id:any){

    this.router.navigate([path+id])
  }




  deleteMatch(id:any){
    // for (let i = 0; i < this.matches.length; i++) {
    //   if (this.matches[i].id === id) {
    //     this.matches.splice(i , 1)
    //     break      
    //   }   
    // }
    // localStorage.setItem("matches",JSON.stringify(this.matches))   

    this.mService.deleteMatch(id).subscribe(()=>{
      console.log("deletedddddd");

      this.getAllMatches()

      
    })
  }



}
