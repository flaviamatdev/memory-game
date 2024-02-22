export class ConfirmationDialogData {
    header: DialogHeader;
    bodyText: string;
    okCallback: Function;
}

export class DialogHeader {
    icon: string;
    iconColor: string;
    title: string;
}
