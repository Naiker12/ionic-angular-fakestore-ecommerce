import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CheckoutService } from 'src/app/shared/services/checkout.service';
import { PdfService } from 'src/app/shared/services/pdf.service';
import { PaymentData } from 'src/app/shared/interface/PaymentData';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
  standalone : false,
})
export class ReceiptPage implements OnInit {
  paymentData: PaymentData | null = null;

  constructor(
    private location: Location,
    private checkoutService: CheckoutService,
    private pdfService: PdfService 
  ) {}

  ngOnInit() {
    this.paymentData = this.checkoutService.getPaymentReceipt();

    if (!this.paymentData) {
      console.error("No se encontraron datos de pago en LocalStorage.");
    } else {
      console.log("Datos de la factura:", this.paymentData);
    }
  }

  printPDF() {
    if (this.paymentData) {
      this.pdfService.generateReceiptPDF(this.paymentData);
    } else {
      console.error("No hay datos de pago para generar la factura.");
    }
  }
}
