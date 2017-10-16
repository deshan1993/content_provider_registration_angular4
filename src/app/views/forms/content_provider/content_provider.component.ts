import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

declare var $: any;
declare var jQuery: any;

@Component({
    selector: 'form1',
    styleUrls: ['./content_provider.component.css'],
    templateUrl: './content_provider.component.html'
})

export class Content_providerComponent{
    hide1 = 'true';
    
 
//to show educational institution registration form
    tabChangeToCompany(){
        
        $("#professional-category").slideDown(1000);
        $("#individual-category").slideUp(1000);
        $("#radioB1").css("background-color","white");
        $("#radioB2").css("background-color","#D0F5A9");
        
    }

//to show individual registration form
    tabChangeToIndividual(){
        $("#professional-category").slideUp(1000);
        $("#individual-category").slideDown(1000);
        $("#radioB1").css("background-color","#F2F5A9");
        $("#radioB2").css("background-color","white");        
    }

    //show professional qualification row2
    show_row2(){
        $("#row_2").show();
        $("#add_btn_row1").hide();
        $("#add_btn_row2").show();
    }

    //show professional qualification row3
    show_row3(){
        $("#row_3").show();
        $("#add_btn_row2").hide();
    }

    //hide professional qualification row2
    hide_row2(){
        $("#row_2").hide();
        $("#add_btn_row1").show();
    }

    //hide professional qualification row3
    hide_row3(){
        $("#row_3").hide();
        $("#add_btn_row2").show();
    }

    //add expertise subject dropdown2
    add_subject2(){
        $("#add_subject_btn1").hide();
        $("#expert_subject2").show();
        $("#add_subject_btn2").show();
        $("#remove_subject_btn2").show();
    }

    //add expertise subject dropdown3
    add_subject3(){
        $("#add_subject_btn2").hide();
        $("#expert_subject3").show();
        $("#add_subject_btn3").hide();
        $("#remove_subject_btn3").show();
    }

    //remove expertise dropdown2
    remove_subject2(){
        $("#expert_subject2").hide();
        $("#remove_subject_btn2").hide();
        $("#add_subject_btn2").hide();
        $("#add_subject_btn1").show();
    }

    //remove expertise dropdown3
    remove_subject3(){
        $("#expert_subject3").hide();
        $("#remove_subject_btn3").hide();
        $("#add_subject_btn1").show();
    }

    //show course list(representing institute)
    show_course(){
        $("#courses").show();
    }

    //hide course list(representing institute)
    hide_course(){
        $("#courses").hide(); //have to empty selection list
        $("#other-field").hide();
        $("#other-field1").hide();
    }
   
    // public institute:String = null;
    // content_others:boolean=false;
    // changeInstitue(){
    //     if(this.institute='institute'){
    //         this.content_others=true;
    //     }
    // }

    //get other representing institute
    show_other_institute(){
        if ($("#courses").val() == "Other") {
            $("#other-field").show();
            $("#other-field1").show();
        } else {
            $("#other-field").hide();
            $("#other-field1").hide();
        }
    }
    
    //add expert subject dropdown2 (institute form)
    add_expert_sub2(){
        $("#add_sub_btn1").hide();
        $("#expert_sub2").show();
        $("#add_sub_btn2").show();
        $("#remove_sub_btn2").show();
    }

    //add expert subject dropdown3 (institute form)
    add_expert_sub3(){
        $("#add_sub_btn2").hide();
        $("#expert_sub3").show();
        $("#add_sub_btn3").hide();
        $("#remove_sub_btn3").show();
    }

    //remove expert subject dropdown2 (institute form)
    remove_expert_sub2(){
        $("#expert_sub2").val("");
        $("#expert_sub2").hide();
        $("#remove_sub_btn2").hide();
        $("#add_sub_btn2").hide();
        $("#add_sub_btn1").show();
    }

    //remove expert subject dropdown3 (institute form)
    remove_expert_sub3(){
        $("#expert_sub3").val("");
        $("#expert_sub3").hide();
        $("#remove_sub_btn3").hide();
        $("#add_sub_btn1").show();
    }

    //show datepicker format
    // show_datepicker1(){
    //     $("#cpDob").datepicker(this.newFunction());
    // }  

    // public newFunction(): any {
    //     return { dateFormat: 'yy-mm-dd' };
    // }
}

