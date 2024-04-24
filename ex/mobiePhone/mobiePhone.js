class Mobile {
    constructor(pin, draft, inbox, sentMessage, status, phone) {
        this.pin = pin;
        this.draft = draft;
        this.inbox = inbox;
        this.sentMessage = sentMessage;
        this.status = status;
        this.phone = phone;
    }

    isTurnOnOrOff() {
        return this.status;
    }

    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }

    sacPin() {
        // Bất đồng bộ
        // setInterval và clearInterval
        while (this.pin <= 100) {
            this.pin = this.pin + 0.01;
        }
    }

    soanTinNhan() {
        // Xây dựng giao diện nhập tin nhắn.
        this.draft = prompt("Nhập tin nhắn: ");
    }

    nhanTinNhan(message, mobile) {
        this.inbox.unshift(message + "~" + mobile.phone)
    }

    guiTinNhan(mobile) {
        // let temp = confirm()
        this.soanTinNhan();
        this.sentMessage.unshift(this.draft);
        mobile.nhanTinNhan(this.draft, this);
        this.draft = "";
    }

    xemTinDaGui() {
        for (let i = 0; i < this.sentMessage.length; i++) {
            // Hiển thị tin nhắn
            
        }
    }


    //   Tương tự là cho tin nhắn hộp thư đến
    // BTVN: Triển khai thêm giảm pin khi thực hiện chức năng
    // Kiểm tra điện thoại bật thì mới cho sử dụng các chức năng

}
