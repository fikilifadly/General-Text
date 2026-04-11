import * as e from "react";
//#region src/Constant/Constant.ts
var t = {
	TYPE: {
		PRIMARY: "PRIMARY",
		SECONDARY: "SECONDARY",
		TEXT: "TEXT",
		CUSTOM_TEXT: "CUSTOM_TEXT",
		DETAIL_TEXT: "DETAIL_TEXT"
	},
	COLOR: {
		WHITE: "#F8F9FA",
		RED: "#F03E3E",
		GRAY: "#495057",
		BLUE: "#4C6EF5",
		GREEN: "#40C057",
		YELLOW: "#FAB005"
	},
	EMPTY_STRING: ""
}, n = {
	base: {
		margin: 0,
		padding: 0,
		fontFamily: "inherit"
	},
	variants: {
		PRIMARY: {
			fontSize: "32px",
			fontWeight: 700,
			lineHeight: 1.2
		},
		SECONDARY: {
			fontSize: "24px",
			fontWeight: 600,
			lineHeight: 1.3
		},
		TEXT: {
			fontSize: "16px",
			fontWeight: 400,
			lineHeight: 1.6
		},
		DETAIL_TEXT: {
			fontSize: "14px",
			fontWeight: 400,
			lineHeight: 1.5
		},
		CUSTOM_TEXT: {
			fontSize: "14px",
			fontWeight: 400
		}
	}
}, { TYPE: r, EMPTY_STRING: i } = t, a = {
	[r.PRIMARY]: "h1",
	[r.SECONDARY]: "h2",
	[r.TEXT]: "p",
	[r.DETAIL_TEXT]: "p",
	[r.CUSTOM_TEXT]: "span"
}, o = ({ type: t = r.TEXT, color: o, text: s = i }) => {
	let c = a[t], l = {
		...n.base,
		...n.variants[t],
		...o ? { color: o } : {}
	};
	return e.createElement(c, { style: l }, s);
};
//#endregion
export { t as Constats, o as GeneralText };
