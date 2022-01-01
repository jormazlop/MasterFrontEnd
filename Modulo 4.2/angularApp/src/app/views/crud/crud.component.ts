import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Provider } from 'src/app/models/provider.model';
import { ProvidersService } from 'src/app/services/providers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit, OnDestroy {

  @ViewChild("addProviderModal", {static: false}) addProviderModal: TemplateRef<any>;

  @ViewChild("modifyProviderModal", {static: false}) modifyProviderModal: TemplateRef<any>;

  @ViewChild("deleteProviderModal", {static: false}) deleteProviderModal: TemplateRef<any>;

  providerSubscription: Subscription;

  providerList: Provider[];

  dtOptions: DataTables.Settings = {};

  newProvider: Provider = new Provider();

  modifiedProvider: Provider = new Provider();

  providerSelected: number;

  editEnabled: boolean;

  constructor(
    private providerService: ProvidersService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {

    this.dtOptions = {
      pageLength: 10
    };

    this.editEnabled = false;

    this.providerList = [];

    this.providerSubscription = this.providerService.currentProvidersValue.subscribe(providers => {
      this.providerList = providers;
      console.log(this.providerList);
    });

  }

  mostrarModalAdd(): void {

    this.modalService.open(this.addProviderModal).result.then( r => {

      if(r === 'Crear') {
        this.addProvider();
      }

    }, error => {});
  }

  mostrarModalDelete(): void {

    this.modalService.open(this.deleteProviderModal).result.then( r => {

      if(r === 'Si') {
        this.deleteProvider();
      }

    }, error => {});

  }

  mostrarModalModify(): void {

    this.modifiedProvider = {...this.providerList[this.providerSelected]};


    this.modalService.open(this.modifyProviderModal).result.then( r => {

      if(r === 'Modificar') {
        this.modifyProvider();
      }

    }, error => {});
  }

  addProvider(): void {

    if(this.providerList.filter(provider => provider.code === this.newProvider.code).length > 0) {
      window.alert('Ya existe un proveedor con ese codigo!');
      this.newProvider = new Provider();
    } else {
      this.providerService.addProvider(this.newProvider);
      this.newProvider = new Provider();
    }

  }

  modifyProvider(): void {

    this.providerService.modifyProvider(this.modifiedProvider, this.providerSelected);
    this.modifiedProvider = new Provider();

  }

  deleteProvider(): void {
    this.providerService.deleteProvider(this.providerSelected);
  }

  onChecked(event: any): void {

    if(!event.currentTarget.checked) {
      this.editEnabled = false;
    } else {
      this.editEnabled = true;
    }

  }

  ngOnDestroy(): void {
    this.providerSubscription.unsubscribe();
  }

}
