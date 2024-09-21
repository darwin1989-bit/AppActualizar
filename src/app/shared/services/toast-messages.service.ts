import { Injectable } from "@angular/core";
import { Message, MessageService } from "primeng/api";

export type ItypeSeverity = "success" | "info" | "warn" | "error" | "secondary";
export type Iposition = "tl" | "tr" | "tc" | "bl" | "bc" | "bc" | "cf";

@Injectable({
  providedIn: "root",
})
export class ToastMessagesService {
  msgs: Message[] = [];

  constructor(private messageService: MessageService) {}

  showToast(position: Iposition, severity: ItypeSeverity, summaryMessage: string, detailMessage: string): void {
    this.messageService.add({
      key: position,
      severity: severity,
      summary: summaryMessage,
      detail: detailMessage,
      life: 6000,
      icon: this.getIcon(severity, summaryMessage),
    });
  }
  showToastTarget(position: Iposition, severity: ItypeSeverity, summaryMessage: string, detailMessage: string): void {
    this.messageService.clear();
    this.messageService.add({
      key: position,
      severity: severity,
      summary: summaryMessage,
      detail: detailMessage,
      life: 6000,
      icon: this.getIcon(severity, summaryMessage),
    });
  }

  showMultiple(): void {
    this.messageService.addAll([
      { severity: "info", summary: "Message 1", detail: "Message Content" },
      { severity: "info", summary: "Message 2", detail: "Message Content" },
      { severity: "info", summary: "Message 3", detail: "Message Content" },
    ]);
  }

  showSticky(summaryMessage: string, detailMessage: string, severityMessage: ItypeSeverity): void {
    this.messageService.add({
      severity: severityMessage,
      summary: summaryMessage,
      detail: detailMessage,
      sticky: true,
    });
  }

  onConfirm(): void {
    this.messageService.clear("c");
  }

  onReject(): void {
    this.messageService.clear("c");
  }

  clear(): void {
    this.messageService.clear();
  }

  inlineMessage(error: { severity: string; summary: string; detail: string }, p0?: { severity: string; summary: string; detail: string }): any {
    this.msgs = [];
    this.msgs.push({ severity: error.severity, summary: error.summary, detail: error.detail });
    return this.msgs;
  }

  private getIcon(severity: string, other: string): string {
    if (other === "Actualización realizada") return "pi pi-file-edit";
    if (other === "Creación realizada") return "pi pi-save";
    if (severity === "success") return "pi pi-check-circle";
    if (severity === "warn") return "pi pi-exclamation-triangle";
    if (severity === "error") return "pi pi-times-circle";
    if (severity === "info") return "pi pi-info-circle";
    return "pi-hashtag";
  }
}
