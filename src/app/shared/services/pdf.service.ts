import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { PaymentData } from '../interface/PaymentData';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() {}

  generateReceiptPDF(paymentData: PaymentData) {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Factura de Compra", 20, 20);

    doc.setFontSize(12);
    doc.text(`Nombre: ${paymentData.name} ${paymentData.lastName}`, 20, 40);
    doc.text(`Dirección: ${paymentData.address}, ${paymentData.city}, ${paymentData.country}`, 20, 50);
    doc.text(`Cuenta Bancaria: ${paymentData.bankAccount}`, 20, 60);
    doc.text(`Fecha de Vencimiento: ${paymentData.dueDate}`, 20, 70);
    doc.text(`Total: $${paymentData.total.toFixed(2)}`, 20, 80);

    doc.text("Productos:", 20, 100);

    let y = 110;
    paymentData.cart.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.title} - $${item.price} x ${item.quantity}`, 20, y);
      y += 10;
    });

    doc.save("factura.pdf");
  }
}
