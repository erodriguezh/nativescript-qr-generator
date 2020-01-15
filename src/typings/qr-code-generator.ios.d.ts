declare class QRCodeGenerator extends NSObject {

	static alloc(): QRCodeGenerator; // inherited from NSObject

	static new(): QRCodeGenerator; // inherited from NSObject

	backgroundColor: CIColor;

	color: CIColor;

	readonly data: NSData;

	errorCorrection: QRErrorCorrection;

	size: CGSize;

	constructor(o: { data: NSData; });

	constructor(o: { string: string; });

	getImage(): UIImage;

	initWithData(data: NSData): this;

	initWithString(string: string): this;
}

declare const enum QRErrorCorrection {

	Low = 0,

	Medium = 1,

	Quartile = 2,

	High = 3
}

declare var iOS_QR_Code_GeneratorVersionNumber: number;

declare var iOS_QR_Code_GeneratorVersionString: interop.Reference<number>;
