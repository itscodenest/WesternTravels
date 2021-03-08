import { Component, EventEmitter, HostBinding, HostListener, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.scss']
})
export class CreateblogComponent implements OnInit {
  formGroup: FormGroup;
//////////////////////////////////////////////drang and drop image part///////////////////////////////////////
@Output() onFileDropped = new EventEmitter<any>();
	
  @HostBinding('style.background-color') private background = '#f5fcff'
  @HostBinding('style.opacity') private opacity = '1'
	
  //Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#9ecbec';
    this.opacity = '0.8'
  }
	
  //Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff'
    this.opacity = '1'
  }
	
  //Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff'
    this.opacity = '1'
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files)
    }
  }
  imagenm:any;
base64: any;
  uploadFile(files: FileList) {
  //   for (let index = 0; index < event.length; index++) {
  //     const element = event[index];
  //     this.files.push(element.name)
  //   }  
  this.imagenm = files.item(0).name
  let reader = new FileReader();
    if (files.item(0)) {
      reader.readAsDataURL(files.item(0));
    }
    reader.onload = () => {
      this.base64 = reader.result
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
   }
  
  ///////////////////////////////angular editer part////////////////////////////////////////
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    
  };

  constructor() { }
 
  ngOnInit(): void {
    this.initForm();
  }
  initForm()
  {
    this.formGroup=new FormGroup({
      htmlContent: new FormControl('',[Validators.required]),
      CardHeading: new FormControl('',[Validators.required]),
      Carddesc : new FormControl('',[Validators.required])
    })
  }

}
