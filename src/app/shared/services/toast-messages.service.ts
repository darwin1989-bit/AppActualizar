import { Injectable } from "@angular/core";
import { Message, MessageService } from "primeng/api";

export type ItypeSeverity = "success" | "info" | "warn" | "error";
export type Iposition = "tl" | "tr" | "tc" | "bl" | "bc" | "bc";

@Injectable({
  providedIn: "root",
})
export class ToastMessagesService {
  msgs: Message[] = [];

  constructor(private messageService: MessageService) {}

  showToast(position: Iposition, severity: ItypeSeverity, summaryMessage: string, detailMessage: string, time: number): void {
    this.messageService.add({
      key: position,
      severity: severity,
      summary: summaryMessage,
      detail: detailMessage,
      life: time,
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

  inlineMessage(error: { severity: string; summary: string; detail: string }): any {
    this.msgs = [];
    this.msgs.push({ severity: error.severity, summary: error.summary, detail: error.detail });
    return this.msgs;
  }
}
