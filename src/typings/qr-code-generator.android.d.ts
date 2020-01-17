/// <reference path="android-declarations.d.ts"/>

declare module net {
	export module glxn {
		export module qrgen {
			export module android {
				export class BitmapIO {
					public static class: java.lang.Class<net.glxn.qrgen.android.BitmapIO>;
					public constructor();
					public static write(param0: globalAndroid.graphics.Bitmap, param1: string, param2: java.io.OutputStream): boolean;
					public static write(param0: globalAndroid.graphics.Bitmap, param1: string, param2: java.io.File): boolean;
				}
			}
		}
	}
}

declare module net {
	export module glxn {
		export module qrgen {
			export module android {
				export class BmpUtil {
					public static class: java.lang.Class<net.glxn.qrgen.android.BmpUtil>;
					public constructor();
					public static save(param0: globalAndroid.graphics.Bitmap, param1: java.io.OutputStream): boolean;
				}
			}
		}
	}
}

declare module net {
	export module glxn {
		export module qrgen {
			export module android {
				export class MatrixToImageConfig {
					public static class: java.lang.Class<net.glxn.qrgen.android.MatrixToImageConfig>;
					public static BLACK: number;
					public static WHITE: number;
					public getPixelOnColor(): number;
					public constructor();
					public getPixelOffColor(): number;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module net {
	export module glxn {
		export module qrgen {
			export module android {
				export class MatrixToImageWriter {
					public static class: java.lang.Class<net.glxn.qrgen.android.MatrixToImageWriter>;
					public static writeToStream(param0: com.google.zxing.common.BitMatrix, param1: string, param2: java.io.OutputStream, param3: net.glxn.qrgen.android.MatrixToImageConfig): void;
					public static writeToStream(param0: com.google.zxing.common.BitMatrix, param1: string, param2: java.io.OutputStream): void;
					public static toBitmap(param0: com.google.zxing.common.BitMatrix, param1: net.glxn.qrgen.android.MatrixToImageConfig): globalAndroid.graphics.Bitmap;
					public static writeToFile(param0: com.google.zxing.common.BitMatrix, param1: string, param2: java.io.File): void;
					public static writeToFile(param0: com.google.zxing.common.BitMatrix, param1: string, param2: java.io.File, param3: net.glxn.qrgen.android.MatrixToImageConfig): void;
					public static toBitmap(param0: com.google.zxing.common.BitMatrix): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare module net {
	export module glxn {
		export module qrgen {
			export module android {
				export class QRCode {
					public static class: java.lang.Class<net.glxn.qrgen.android.QRCode>;
					public text: string;
					public withErrorCorrection(param0: com.google.zxing.qrcode.decoder.ErrorCorrectionLevel): net.glxn.qrgen.android.QRCode;
					public constructor(param0: string);
					public writeToStream(param0: java.io.OutputStream): void;
					public withHint(param0: com.google.zxing.EncodeHintType, param1: any): net.glxn.qrgen.android.QRCode;
					public withSize(param0: number, param1: number): net.glxn.qrgen.android.QRCode;
					public withCharset(param0: string): net.glxn.qrgen.android.QRCode;
					public static from(param0: string): net.glxn.qrgen.android.QRCode;
					public bitmap(): globalAndroid.graphics.Bitmap;
					public static from(param0: net.glxn.qrgen.core.scheme.Schema): net.glxn.qrgen.android.QRCode;
					public file(): java.io.File;
					public to(param0: net.glxn.qrgen.core.image.ImageType): net.glxn.qrgen.android.QRCode;
					public file(param0: string): java.io.File;
					public withColor(param0: number, param1: number): net.glxn.qrgen.android.QRCode;
				}
			}
		}
	}
}

//Generics information:

