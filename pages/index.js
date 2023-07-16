const colors = [
  {
    name: "Red",
    variants: [
      {
        number: 900,
        className: "bg-red-900",
        hex: "#B91C1C",
        rgb: "rgb(185, 28, 28)",
        cmyk: "cmyk(0, 85, 85, 27)",
      },
      {
        number: 800,
        className: "bg-red-800",
        hex: "#C53030",
        rgb: "rgb(197, 48, 48)",
        cmyk: "cmyk(0, 76, 76, 23)",
      },
      {
        number: 700,
        className: "bg-red-700",
        hex: "#DC2626",
        rgb: "rgb(220, 38, 38)",
        cmyk: "cmyk(0, 83, 83, 14)",
      },
      {
        number: 600,
        className: "bg-red-600",
        hex: "#EF4444",
        rgb: "rgb(239, 68, 68)",
        cmyk: "cmyk(0, 72, 72, 6)",
      },
      {
        number: 500,
        className: "bg-red-500",
        hex: "#F87171",
        rgb: "rgb(248, 113, 113)",
        cmyk: "cmyk(0, 55, 55, 3)",
      },
      {
        number: 400,
        className: "bg-red-400",
        hex: "#FCA5A5",
        rgb: "rgb(252, 165, 165)",
        cmyk: "cmyk(0, 34, 34, 1)",
      },
      {
        number: 300,
        className: "bg-red-300",
        hex: "#FECACA",
        rgb: "rgb(254, 202, 202)",
        cmyk: "cmyk(0, 20, 20, 0)",
      },
      {
        number: 200,
        className: "bg-red-200",
        hex: "#FEE2E2",
        rgb: "rgb(254, 226, 226)",
        cmyk: "cmyk(0, 11, 11, 0)",
      },
      {
        number: 100,
        className: "bg-red-100",
        hex: "#FED7D7",
        rgb: "rgb(254, 215, 215)",
        cmyk: "cmyk(0, 16, 16, 0)",
      },
      {
        number: 50,
        className: "bg-red-50",
        hex: "#FEF2F2",
        rgb: "rgb(254, 242, 242)",
        cmyk: "cmyk(0, 5, 5, 0)",
      },
    ],
  },
  {
    name: "Orange",
    variants: [
      {
        number: 900,
        className: "bg-orange-900",
        hex: "#C05621",
        rgb: "rgb(192, 86, 33)",
        cmyk: "cmyk(0, 55, 83, 25)",
      },
      {
        number: 800,
        className: "bg-orange-800",
        hex: "#DD6B20",
        rgb: "rgb(221, 107, 32)",
        cmyk: "cmyk(0, 52, 86, 13)",
      },
      {
        number: 700,
        className: "bg-orange-700",
        hex: "#ED8936",
        rgb: "rgb(237, 137, 54)",
        cmyk: "cmyk(0, 42, 77, 7)",
      },
      {
        number: 600,
        className: "bg-orange-600",
        hex: "#F6AD55",
        rgb: "rgb(246, 173, 85)",
        cmyk: "cmyk(0, 29, 65, 4)",
      },
      {
        number: 500,
        className: "bg-orange-500",
        hex: "#FBD38D",
        rgb: "rgb(251, 211, 141)",
        cmyk: "cmyk(0, 16, 44, 2)",
      },
      {
        number: 400,
        className: "bg-orange-400",
        hex: "#FDEABD",
        rgb: "rgb(253, 234, 189)",
        cmyk: "cmyk(0, 7, 25, 1)",
      },
      {
        number: 300,
        className: "bg-orange-300",
        hex: "#FFF2CC",
        rgb: "rgb(255, 242, 204)",
        cmyk: "cmyk(0, 5, 20, 0)",
      },
      {
        number: 200,
        className: "bg-orange-200",
        hex: "#FFF8E5",
        rgb: "rgb(255, 248, 229)",
        cmyk: "cmyk(0, 3, 10, 0)",
      },
      {
        number: 100,
        className: "bg-orange-100",
        hex: "#FFFAF0",
        rgb: "rgb(255, 250, 240)",
        cmyk: "cmyk(0, 2, 6, 0)",
      },
      {
        number: 50,
        className: "bg-orange-50",
        hex: "#FFFDF7",
        rgb: "rgb(255, 253, 247)",
        cmyk: "cmyk(0, 0, 3, 0)",
      },
    ],
  },
  {
    name: "Amber",
    variants: [
      {
        number: 900,
        className: "bg-amber-900",
        hex: "#B45309",
        rgb: "rgb(180, 83, 9)",
        cmyk: "cmyk(0, 54, 95, 29)",
      },
      {
        number: 800,
        className: "bg-amber-800",
        hex: "#C2410C",
        rgb: "rgb(194, 65, 12)",
        cmyk: "cmyk(0, 66, 94, 24)",
      },
      {
        number: 700,
        className: "bg-amber-700",
        hex: "#D97706",
        rgb: "rgb(217, 119, 6)",
        cmyk: "cmyk(0, 45, 97, 15)",
      },
      {
        number: 600,
        className: "bg-amber-600",
        hex: "#EAB308",
        rgb: "rgb(234, 179, 8)",
        cmyk: "cmyk(0, 23, 96, 9)",
      },
      {
        number: 500,
        className: "bg-amber-500",
        hex: "#F59E0B",
        rgb: "rgb(245, 158, 11)",
        cmyk: "cmyk(0, 35, 96, 4)",
      },
      {
        number: 400,
        className: "bg-amber-400",
        hex: "#FBBF24",
        rgb: "rgb(251, 191, 36)",
        cmyk: "cmyk(0, 24, 86, 2)",
      },
      {
        number: 300,
        className: "bg-amber-300",
        hex: "#FCD34D",
        rgb: "rgb(252, 211, 77)",
        cmyk: "cmyk(0, 16, 69, 1)",
      },
      {
        number: 200,
        className: "bg-amber-200",
        hex: "#FDE68A",
        rgb: "rgb(253, 230, 138)",
        cmyk: "cmyk(0, 9, 45, 1)",
      },
      {
        number: 100,
        className: "bg-amber-100",
        hex: "#FEF3C7",
        rgb: "rgb(254, 243, 199)",
        cmyk: "cmyk(0, 4, 22, 0)",
      },
      {
        number: 50,
        className: "bg-amber-50",
        hex: "#FFFBEB",
        rgb: "rgb(255, 251, 235)",
        cmyk: "cmyk(0, 2, 8, 0)",
      },
    ],
  },
  {
    name: "Yellow",
    variants: [
      {
        number: 900,
        className: "bg-yellow-900",
        hex: "#8B5C00",
        rgb: "rgb(139, 92, 0)",
        cmyk: "cmyk(0, 34, 100, 45)",
      },
      {
        number: 800,
        className: "bg-yellow-800",
        hex: "#A85500",
        rgb: "rgb(168, 85, 0)",
        cmyk: "cmyk(0, 49, 100, 34)",
      },
      {
        number: 700,
        className: "bg-yellow-700",
        hex: "#D97706",
        rgb: "rgb(217, 119, 6)",
        cmyk: "cmyk(0, 45, 97, 15)",
      },
      {
        number: 600,
        className: "bg-yellow-600",
        hex: "#F59E0B",
        rgb: "rgb(245, 158, 11)",
        cmyk: "cmyk(0, 35, 96, 4)",
      },
      {
        number: 500,
        className: "bg-yellow-500",
        hex: "#FBBF24",
        rgb: "rgb(251, 191, 36)",
        cmyk: "cmyk(0, 24, 86, 2)",
      },
      {
        number: 400,
        className: "bg-yellow-400",
        hex: "#FCD34D",
        rgb: "rgb(252, 211, 77)",
        cmyk: "cmyk(0, 16, 69, 1)",
      },
      {
        number: 300,
        className: "bg-yellow-300",
        hex: "#FDE68A",
        rgb: "rgb(253, 230, 138)",
        cmyk: "cmyk(0, 9, 45, 1)",
      },
      {
        number: 200,
        className: "bg-yellow-200",
        hex: "#FEF3C7",
        rgb: "rgb(254, 243, 199)",
        cmyk: "cmyk(0, 4, 22, 0)",
      },
      {
        number: 100,
        className: "bg-yellow-100",
        hex: "#FFF9D4",
        rgb: "rgb(255, 249, 212)",
        cmyk: "cmyk(0, 2, 17, 0)",
      },
      {
        number: 50,
        className: "bg-yellow-50",
        hex: "#FFFFEC",
        rgb: "rgb(255, 255, 236)",
        cmyk: "cmyk(0, 0, 8, 0)",
      },
    ],
  },
  {
    name: "Lime",
    variants: [
      {
        number: 900,
        className: "bg-lime-900",
        hex: "#2F855A",
        rgb: "rgb(47, 133, 90)",
        cmyk: "cmyk(65, 0, 32, 48)",
      },
      {
        number: 800,
        className: "bg-lime-800",
        hex: "#38A169",
        rgb: "rgb(56, 161, 105)",
        cmyk: "cmyk(65, 0, 35, 37)",
      },
      {
        number: 700,
        className: "bg-lime-700",
        hex: "#48BB78",
        rgb: "rgb(72, 187, 120)",
        cmyk: "cmyk(61, 0, 36, 27)",
      },
      {
        number: 600,
        className: "bg-lime-600",
        hex: "#6EE7B7",
        rgb: "rgb(110, 231, 183)",
        cmyk: "cmyk(52, 0, 21, 9)",
      },
      {
        number: 500,
        className: "bg-lime-500",
        hex: "#A7F3D0",
        rgb: "rgb(167, 243, 208)",
        cmyk: "cmyk(31, 0, 15, 5)",
      },
      {
        number: 400,
        className: "bg-lime-400",
        hex: "#C6F6D5",
        rgb: "rgb(198, 246, 213)",
        cmyk: "cmyk(19, 0, 14, 4)",
      },
      {
        number: 300,
        className: "bg-lime-300",
        hex: "#E6FFEC",
        rgb: "rgb(230, 255, 236)",
        cmyk: "cmyk(10, 0, 7, 0)",
      },
      {
        number: 200,
        className: "bg-lime-200",
        hex: "#F0FFF4",
        rgb: "rgb(240, 255, 244)",
        cmyk: "cmyk(6, 0, 5, 0)",
      },
      {
        number: 100,
        className: "bg-lime-100",
        hex: "#F7FFFB",
        rgb: "rgb(247, 255, 251)",
        cmyk: "cmyk(3, 0, 2, 0)",
      },
      {
        number: 50,
        className: "bg-lime-50",
        hex: "#FCFFFE",
        rgb: "rgb(252, 255, 254)",
        cmyk: "cmyk(0, 0, 1, 0)",
      },
    ],
  },
  {
    name: "Green",
    variants: [
      {
        number: 900,
        className: "bg-green-900",
        hex: "#22543D",
        rgb: "rgb(34, 84, 61)",
        cmyk: "cmyk(59, 0, 27, 67)",
      },
      {
        number: 800,
        className: "bg-green-800",
        hex: "#276749",
        rgb: "rgb(39, 103, 73)",
        cmyk: "cmyk(62, 0, 29, 60)",
      },
      {
        number: 700,
        className: "bg-green-700",
        hex: "#2F855A",
        rgb: "rgb(47, 133, 90)",
        cmyk: "cmyk(65, 0, 32, 48)",
      },
      {
        number: 600,
        className: "bg-green-600",
        hex: "#38A169",
        rgb: "rgb(56, 161, 105)",
        cmyk: "cmyk(65, 0, 35, 37)",
      },
      {
        number: 500,
        className: "bg-green-500",
        hex: "#48BB78",
        rgb: "rgb(72, 187, 120)",
        cmyk: "cmyk(61, 0, 36, 27)",
      },
      {
        number: 400,
        className: "bg-green-400",
        hex: "#68D391",
        rgb: "rgb(104, 211, 145)",
        cmyk: "cmyk(51, 0, 31, 17)",
      },
      {
        number: 300,
        className: "bg-green-300",
        hex: "#9AE6B4",
        rgb: "rgb(154, 230, 180)",
        cmyk: "cmyk(33, 0, 22, 10)",
      },
      {
        number: 200,
        className: "bg-green-200",
        hex: "#C6F6D5",
        rgb: "rgb(198, 246, 213)",
        cmyk: "cmyk(19, 0, 14, 4)",
      },
      {
        number: 100,
        className: "bg-green-100",
        hex: "#F0FFF4",
        rgb: "rgb(240, 255, 244)",
        cmyk: "cmyk(6, 0, 5, 0)",
      },
      {
        number: 50,
        className: "bg-green-50",
        hex: "#F7FFF7",
        rgb: "rgb(247, 255, 247)",
        cmyk: "cmyk(3, 0, 2, 0)",
      },
    ],
  },
  {
    name: "Emerald",
    variants: [
      {
        number: 900,
        className: "bg-emerald-900",
        hex: "#22543D",
        rgb: "rgb(34, 84, 61)",
        cmyk: "cmyk(59, 0, 27, 67)",
      },
      {
        number: 800,
        className: "bg-emerald-800",
        hex: "#276749",
        rgb: "rgb(39, 103, 73)",
        cmyk: "cmyk(62, 0, 29, 60)",
      },
      {
        number: 700,
        className: "bg-emerald-700",
        hex: "#2F855A",
        rgb: "rgb(47, 133, 90)",
        cmyk: "cmyk(65, 0, 32, 48)",
      },
      {
        number: 600,
        className: "bg-emerald-600",
        hex: "#38A169",
        rgb: "rgb(56, 161, 105)",
        cmyk: "cmyk(65, 0, 35, 37)",
      },
      {
        number: 500,
        className: "bg-emerald-500",
        hex: "#48BB78",
        rgb: "rgb(72, 187, 120)",
        cmyk: "cmyk(61, 0, 36, 27)",
      },
      {
        number: 400,
        className: "bg-emerald-400",
        hex: "#68D391",
        rgb: "rgb(104, 211, 145)",
        cmyk: "cmyk(51, 0, 31, 17)",
      },
      {
        number: 300,
        className: "bg-emerald-300",
        hex: "#9AE6B4",
        rgb: "rgb(154, 230, 180)",
        cmyk: "cmyk(33, 0, 22, 10)",
      },
      {
        number: 200,
        className: "bg-emerald-200",
        hex: "#C6F6D5",
        rgb: "rgb(198, 246, 213)",
        cmyk: "cmyk(19, 0, 14, 4)",
      },
      {
        number: 100,
        className: "bg-emerald-100",
        hex: "#F0FFF4",
        rgb: "rgb(240, 255, 244)",
        cmyk: "cmyk(6, 0, 5, 0)",
      },
      {
        number: 50,
        className: "bg-emerald-50",
        hex: "#F7FFF7",
        rgb: "rgb(247, 255, 247)",
        cmyk: "cmyk(3, 0, 2, 0)",
      },
    ],
  },
  {
    name: "Teal",
    variants: [
      {
        number: 900,
        className: "bg-teal-900",
        hex: "#234E52",
        rgb: "rgb(35, 78, 82)",
        cmyk: "cmyk(57, 5, 0, 68)",
      },
      {
        number: 800,
        className: "bg-teal-800",
        hex: "#285E61",
        rgb: "rgb(40, 94, 97)",
        cmyk: "cmyk(59, 3, 0, 62)",
      },
      {
        number: 700,
        className: "bg-teal-700",
        hex: "#2C7A7B",
        rgb: "rgb(44, 122, 123)",
        cmyk: "cmyk(64, 0, 0, 52)",
      },
      {
        number: 600,
        className: "bg-teal-600",
        hex: "#319795",
        rgb: "rgb(49, 151, 149)",
        cmyk: "cmyk(67, 0, 1, 41)",
      },
      {
        number: 500,
        className: "bg-teal-500",
        hex: "#38B2AC",
        rgb: "rgb(56, 178, 172)",
        cmyk: "cmyk(69, 0, 3, 30)",
      },
      {
        number: 400,
        className: "bg-teal-400",
        hex: "#4FD1C5",
        rgb: "rgb(79, 209, 197)",
        cmyk: "cmyk(62, 0, 6, 18)",
      },
      {
        number: 300,
        className: "bg-teal-300",
        hex: "#81E6D9",
        rgb: "rgb(129, 230, 217)",
        cmyk: "cmyk(44, 0, 6, 10)",
      },
      {
        number: 200,
        className: "bg-teal-200",
        hex: "#BAF5E3",
        rgb: "rgb(186, 245, 227)",
        cmyk: "cmyk(24, 0, 7, 4)",
      },
      {
        number: 100,
        className: "bg-teal-100",
        hex: "#E6FFFA",
        rgb: "rgb(230, 255, 250)",
        cmyk: "cmyk(10, 0, 2, 0)",
      },
      {
        number: 50,
        className: "bg-teal-50",
        hex: "#F0FFFF",
        rgb: "rgb(240, 255, 255)",
        cmyk: "cmyk(6, 0, 0, 0)",
      },
    ],
  },
  {
    name: "Cyan",
    variants: [
      {
        number: 900,
        className: "bg-cyan-900",
        hex: "#0C5460",
        rgb: "rgb(12, 84, 96)",
        cmyk: "cmyk(88, 0, 12, 62)",
      },
      {
        number: 800,
        className: "bg-cyan-800",
        hex: "#0E7490",
        rgb: "rgb(14, 116, 144)",
        cmyk: "cmyk(90, 0, 20, 44)",
      },
      {
        number: 700,
        className: "bg-cyan-700",
        hex: "#1098AD",
        rgb: "rgb(16, 152, 173)",
        cmyk: "cmyk(91, 12, 0, 32)",
      },
      {
        number: 600,
        className: "bg-cyan-600",
        hex: "#17B6B8",
        rgb: "rgb(23, 182, 184)",
        cmyk: "cmyk(87, 1, 0, 28)",
      },
      {
        number: 500,
        className: "bg-cyan-500",
        hex: "#2CDBD3",
        rgb: "rgb(44, 219, 211)",
        cmyk: "cmyk(80, 0, 4, 14)",
      },
      {
        number: 400,
        className: "bg-cyan-400",
        hex: "#5EEAD4",
        rgb: "rgb(94, 234, 212)",
        cmyk: "cmyk(60, 0, 9, 8)",
      },
      {
        number: 300,
        className: "bg-cyan-300",
        hex: "#86F1DE",
        rgb: "rgb(134, 241, 222)",
        cmyk: "cmyk(44, 0, 8, 5)",
      },
      {
        number: 200,
        className: "bg-cyan-200",
        hex: "#BAF5EA",
        rgb: "rgb(186, 245, 234)",
        cmyk: "cmyk(24, 0, 5, 4)",
      },
      {
        number: 100,
        className: "bg-cyan-100",
        hex: "#E6FFFA",
        rgb: "rgb(230, 255, 250)",
        cmyk: "cmyk(10, 0, 2, 0)",
      },
      {
        number: 50,
        className: "bg-cyan-50",
        hex: "#F0FFFF",
        rgb: "rgb(240, 255, 255)",
        cmyk: "cmyk(6, 0, 0, 0)",
      },
    ],
  },
  {
    name: "Skyblue",
    variants: [
      {
        number: 900,
        className: "bg-sky-900",
        hex: "#0D2B3E",
        rgb: "rgb(13, 43, 62)",
        cmyk: "cmyk(79, 31, 0, 76)",
      },
      {
        number: 800,
        className: "bg-sky-800",
        hex: "#153E55",
        rgb: "rgb(21, 62, 85)",
        cmyk: "cmyk(75, 27, 0, 67)",
      },
      {
        number: 700,
        className: "bg-sky-700",
        hex: "#1F4E65",
        rgb: "rgb(31, 78, 101)",
        cmyk: "cmyk(69, 23, 0, 60)",
      },
      {
        number: 600,
        className: "bg-sky-600",
        hex: "#265C74",
        rgb: "rgb(38, 92, 116)",
        cmyk: "cmyk(67, 20, 0, 55)",
      },
      {
        number: 500,
        className: "bg-sky-500",
        hex: "#307D99",
        rgb: "rgb(48, 125, 153)",
        cmyk: "cmyk(69, 18, 0, 40)",
      },
      {
        number: 400,
        className: "bg-sky-400",
        hex: "#3E97B2",
        rgb: "rgb(62, 151, 178)",
        cmyk: "cmyk(65, 15, 0, 30)",
      },
      {
        number: 300,
        className: "bg-sky-300",
        hex: "#4EB3C1",
        rgb: "rgb(78, 179, 193)",
        cmyk: "cmyk(59, 7, 0, 24)",
      },
      {
        number: 200,
        className: "bg-sky-200",
        hex: "#94C9D1",
        rgb: "rgb(148, 201, 209)",
        cmyk: "cmyk(29, 4, 0, 18)",
      },
      {
        number: 100,
        className: "bg-sky-100",
        hex: "#CCE9F2",
        rgb: "rgb(204, 233, 242)",
        cmyk: "cmyk(16, 1, 0, 5)",
      },
      {
        number: 50,
        className: "bg-sky-50",
        hex: "#F0F9FB",
        rgb: "rgb(240, 249, 251)",
        cmyk: "cmyk(4, 0, 0, 2)",
      },
    ],
  },
  {
    name: "Blue",
    variants: [
      {
        number: 900,
        className: "bg-blue-900",
        hex: "#1E3A8A",
        rgb: "rgb(30, 58, 138)",
        cmyk: "cmyk(87, 58, 0, 46)",
      },
      {
        number: 800,
        className: "bg-blue-800",
        hex: "#1F4E8A",
        rgb: "rgb(31, 78, 138)",
        cmyk: "cmyk(78, 44, 0, 46)",
      },
      {
        number: 700,
        className: "bg-blue-700",
        hex: "#245DA7",
        rgb: "rgb(36, 93, 167)",
        cmyk: "cmyk(78, 44, 0, 35)",
      },
      {
        number: 600,
        className: "bg-blue-600",
        hex: "#316DCA",
        rgb: "rgb(49, 109, 202)",
        cmyk: "cmyk(76, 46, 0, 21)",
      },
      {
        number: 500,
        className: "bg-blue-500",
        hex: "#3B82F6",
        rgb: "rgb(59, 130, 246)",
        cmyk: "cmyk(76, 47, 0, 4)",
      },
      {
        number: 400,
        className: "bg-blue-400",
        hex: "#60A5FA",
        rgb: "rgb(96, 165, 250)",
        cmyk: "cmyk(62, 34, 0, 2)",
      },
      {
        number: 300,
        className: "bg-blue-300",
        hex: "#93C5FD",
        rgb: "rgb(147, 197, 253)",
        cmyk: "cmyk(42, 22, 0, 1)",
      },
      {
        number: 200,
        className: "bg-blue-200",
        hex: "#BFDBFE",
        rgb: "rgb(191, 219, 254)",
        cmyk: "cmyk(25, 14, 0, 0)",
      },
      {
        number: 100,
        className: "bg-blue-100",
        hex: "#E5E7EB",
        rgb: "rgb(229, 231, 235)",
        cmyk: "cmyk(8, 3, 0, 0)",
      },
      {
        number: 50,
        className: "bg-blue-50",
        hex: "#F9FAFB",
        rgb: "rgb(249, 250, 251)",
        cmyk: "cmyk(2, 1, 0, 0)",
      },
    ],
  },
  {
    name: "Indigo",
    variants: [
      {
        number: 900,
        className: "bg-indigo-900",
        hex: "#3730A3",
        rgb: "rgb(55, 48, 163)",
        cmyk: "cmyk(66, 71, 0, 36)",
      },
      {
        number: 800,
        className: "bg-indigo-800",
        hex: "#4338CA",
        rgb: "rgb(67, 56, 202)",
        cmyk: "cmyk(66, 72, 0, 21)",
      },
      {
        number: 700,
        className: "bg-indigo-700",
        hex: "#4F46E5",
        rgb: "rgb(79, 70, 229)",
        cmyk: "cmyk(66, 71, 0, 10)",
      },
      {
        number: 600,
        className: "bg-indigo-600",
        hex: "#5E4FED",
        rgb: "rgb(94, 79, 237)",
        cmyk: "cmyk(60, 67, 0, 7)",
      },
      {
        number: 500,
        className: "bg-indigo-500",
        hex: "#7C3AED",
        rgb: "rgb(124, 58, 237)",
        cmyk: "cmyk(47, 76, 0, 7)",
      },
      {
        number: 400,
        className: "bg-indigo-400",
        hex: "#9333EA",
        rgb: "rgb(147, 51, 234)",
        cmyk: "cmyk(37, 78, 0, 8)",
      },
      {
        number: 300,
        className: "bg-indigo-300",
        hex: "#AB3CEA",
        rgb: "rgb(171, 60, 234)",
        cmyk: "cmyk(27, 74, 0, 8)",
      },
      {
        number: 200,
        className: "bg-indigo-200",
        hex: "#C53BFF",
        rgb: "rgb(197, 59, 255)",
        cmyk: "cmyk(23, 77, 0, 0)",
      },
      {
        number: 100,
        className: "bg-indigo-100",
        hex: "#D9C6FF",
        rgb: "rgb(217, 198, 255)",
        cmyk: "cmyk(15, 23, 0, 0)",
      },
      {
        number: 50,
        className: "bg-indigo-50",
        hex: "#EDE9FE",
        rgb: "rgb(237, 233, 254)",
        cmyk: "cmyk(6, 9, 0, 0)",
      },
    ],
  },
  {
    name: "Violet",
    variants: [
      {
        number: 900,
        className: "bg-violet-900",
        hex: "#4C1D95",
        rgb: "rgb(76, 29, 149)",
        cmyk: "cmyk(49, 81, 0, 42)",
      },
      {
        number: 800,
        className: "bg-violet-800",
        hex: "#5825A1",
        rgb: "rgb(88, 37, 161)",
        cmyk: "cmyk(45, 77, 0, 37)",
      },
      {
        number: 700,
        className: "bg-violet-700",
        hex: "#6729AD",
        rgb: "rgb(103, 41, 173)",
        cmyk: "cmyk(40, 76, 0, 32)",
      },
      {
        number: 600,
        className: "bg-violet-600",
        hex: "#782CB8",
        rgb: "rgb(120, 44, 184)",
        cmyk: "cmyk(35, 76, 0, 28)",
      },
      {
        number: 500,
        className: "bg-violet-500",
        hex: "#8B5CF6",
        rgb: "rgb(139, 92, 246)",
        cmyk: "cmyk(43, 63, 0, 4)",
      },
      {
        number: 400,
        className: "bg-violet-400",
        hex: "#A78BFA",
        rgb: "rgb(167, 139, 250)",
        cmyk: "cmyk(33, 44, 0, 2)",
      },
      {
        number: 300,
        className: "bg-violet-300",
        hex: "#C4B5FD",
        rgb: "rgb(196, 181, 253)",
        cmyk: "cmyk(23, 28, 0, 1)",
      },
      {
        number: 200,
        className: "bg-violet-200",
        hex: "#DDD6FE",
        rgb: "rgb(221, 214, 254)",
        cmyk: "cmyk(13, 16, 0, 0)",
      },
      {
        number: 100,
        className: "bg-violet-100",
        hex: "#F3F0FF",
        rgb: "rgb(243, 240, 255)",
        cmyk: "cmyk(5, 6, 0, 0)",
      },
      {
        number: 50,
        className: "bg-violet-50",
        hex: "#FAFAFF",
        rgb: "rgb(250, 250, 255)",
        cmyk: "cmyk(1, 1, 0, 0)",
      },
    ],
  },
  {
    name: "Purple",
    variants: [
      {
        number: 900,
        className: "bg-purple-900",
        hex: "#4C1D6B",
        rgb: "rgb(76, 29, 107)",
        cmyk: "cmyk(29, 73, 0, 58)",
      },
      {
        number: 800,
        className: "bg-purple-800",
        hex: "#58217B",
        rgb: "rgb(88, 33, 123)",
        cmyk: "cmyk(29, 73, 0, 52)",
      },
      {
        number: 700,
        className: "bg-purple-700",
        hex: "#67278E",
        rgb: "rgb(103, 39, 142)",
        cmyk: "cmyk(27, 73, 0, 44)",
      },
      {
        number: 600,
        className: "bg-purple-600",
        hex: "#782AAE",
        rgb: "rgb(120, 42, 174)",
        cmyk: "cmyk(27, 76, 0, 32)",
      },
      {
        number: 500,
        className: "bg-purple-500",
        hex: "#8B5ACC",
        rgb: "rgb(139, 90, 204)",
        cmyk: "cmyk(32, 56, 0, 20)",
      },
      {
        number: 400,
        className: "bg-purple-400",
        hex: "#A78BDA",
        rgb: "rgb(167, 139, 218)",
        cmyk: "cmyk(23, 36, 0, 14)",
      },
      {
        number: 300,
        className: "bg-purple-300",
        hex: "#C4B5E8",
        rgb: "rgb(196, 181, 232)",
        cmyk: "cmyk(15, 22, 0, 9)",
      },
      {
        number: 200,
        className: "bg-purple-200",
        hex: "#DDD6F4",
        rgb: "rgb(221, 214, 244)",
        cmyk: "cmyk(9, 12, 0, 4)",
      },
      {
        number: 100,
        className: "bg-purple-100",
        hex: "#F3F0FA",
        rgb: "rgb(243, 240, 250)",
        cmyk: "cmyk(5, 5, 0, 0)",
      },
      {
        number: 50,
        className: "bg-purple-50",
        hex: "#FAFAFE",
        rgb: "rgb(250, 250, 254)",
        cmyk: "cmyk(1, 1, 0, 0)",
      },
    ],
  },
  {
    name: "Fuchsia",
    variants: [
      {
        number: 900,
        className: "bg-fuchsia-900",
        hex: "#6B2E7F",
        rgb: "rgb(107, 46, 127)",
        cmyk: "cmyk(16, 64, 0, 50)",
      },
      {
        number: 800,
        className: "bg-fuchsia-800",
        hex: "#7C2E8C",
        rgb: "rgb(124, 46, 140)",
        cmyk: "cmyk(16, 67, 0, 45)",
      },
      {
        number: 700,
        className: "bg-fuchsia-700",
        hex: "#8F2F9A",
        rgb: "rgb(143, 47, 154)",
        cmyk: "cmyk(12, 69, 0, 40)",
      },
      {
        number: 600,
        className: "bg-fuchsia-600",
        hex: "#A333A8",
        rgb: "rgb(163, 51, 168)",
        cmyk: "cmyk(12, 70, 0, 34)",
      },
      {
        number: 500,
        className: "bg-fuchsia-500",
        hex: "#BD34BB",
        rgb: "rgb(189, 52, 187)",
        cmyk: "cmyk(0, 72, 1, 26)",
      },
      {
        number: 400,
        className: "bg-fuchsia-400",
        hex: "#C85CC2",
        rgb: "rgb(200, 92, 194)",
        cmyk: "cmyk(0, 54, 3, 22)",
      },
      {
        number: 300,
        className: "bg-fuchsia-300",
        hex: "#D981C9",
        rgb: "rgb(217, 129, 201)",
        cmyk: "cmyk(0, 40, 7, 15)",
      },
      {
        number: 200,
        className: "bg-fuchsia-200",
        hex: "#EAA5D0",
        rgb: "rgb(234, 165, 208)",
        cmyk: "cmyk(0, 29, 11, 8)",
      },
      {
        number: 100,
        className: "bg-fuchsia-100",
        hex: "#F6C9D8",
        rgb: "rgb(246, 201, 216)",
        cmyk: "cmyk(0, 18, 12, 4)",
      },
      {
        number: 50,
        className: "bg-fuchsia-50",
        hex: "#FEF0F5",
        rgb: "rgb(254, 240, 245)",
        cmyk: "cmyk(0, 6, 3, 0)",
      },
    ],
  },
  {
    name: "Pink",
    variants: [
      {
        number: 900,
        className: "bg-pink-900",
        hex: "#73254C",
        rgb: "rgb(115, 37, 76)",
        cmyk: "cmyk(0, 68, 34, 55)",
      },
      {
        number: 800,
        className: "bg-pink-800",
        hex: "#842C58",
        rgb: "rgb(132, 44, 88)",
        cmyk: "cmyk(0, 67, 33, 48)",
      },
      {
        number: 700,
        className: "bg-pink-700",
        hex: "#933362",
        rgb: "rgb(147, 51, 98)",
        cmyk: "cmyk(0, 65, 33, 42)",
      },
      {
        number: 600,
        className: "bg-pink-600",
        hex: "#A8396F",
        rgb: "rgb(168, 57, 111)",
        cmyk: "cmyk(0, 66, 34, 34)",
      },
      {
        number: 500,
        className: "bg-pink-500",
        hex: "#C14480",
        rgb: "rgb(193, 68, 128)",
        cmyk: "cmyk(0, 65, 34, 24)",
      },
      {
        number: 400,
        className: "bg-pink-400",
        hex: "#D53F8C",
        rgb: "rgb(213, 63, 140)",
        cmyk: "cmyk(0, 70, 34, 16)",
      },
      {
        number: 300,
        className: "bg-pink-300",
        hex: "#E83A98",
        rgb: "rgb(232, 58, 152)",
        cmyk: "cmyk(0, 75, 34, 9)",
      },
      {
        number: 200,
        className: "bg-pink-200",
        hex: "#F73AA3",
        rgb: "rgb(247, 58, 163)",
        cmyk: "cmyk(0, 76, 34, 3)",
      },
      {
        number: 100,
        className: "bg-pink-100",
        hex: "#FAB8D2",
        rgb: "rgb(250, 184, 210)",
        cmyk: "cmyk(0, 26, 16, 2)",
      },
      {
        number: 50,
        className: "bg-pink-50",
        hex: "#FEF2F7",
        rgb: "rgb(254, 242, 247)",
        cmyk: "cmyk(0, 5, 2, 0)",
      },
    ],
  },
  {
    name: "Rose",
    variants: [
      {
        number: 900,
        className: "bg-rose-900",
        hex: "#7C1A42",
        rgb: "rgb(124, 26, 66)",
        cmyk: "cmyk(0, 79, 47, 51)",
      },
      {
        number: 800,
        className: "bg-rose-800",
        hex: "#8E1D4B",
        rgb: "rgb(142, 29, 75)",
        cmyk: "cmyk(0, 80, 47, 44)",
      },
      {
        number: 700,
        className: "bg-rose-700",
        hex: "#A22055",
        rgb: "rgb(162, 32, 85)",
        cmyk: "cmyk(0, 80, 47, 36)",
      },
      {
        number: 600,
        className: "bg-rose-600",
        hex: "#B6235E",
        rgb: "rgb(182, 35, 94)",
        cmyk: "cmyk(0, 81, 48, 29)",
      },
      {
        number: 500,
        className: "bg-rose-500",
        hex: "#CC2471",
        rgb: "rgb(204, 36, 113)",
        cmyk: "cmyk(0, 82, 45, 20)",
      },
      {
        number: 400,
        className: "bg-rose-400",
        hex: "#D94E83",
        rgb: "rgb(217, 78, 131)",
        cmyk: "cmyk(0, 64, 40, 15)",
      },
      {
        number: 300,
        className: "bg-rose-300",
        hex: "#E66996",
        rgb: "rgb(230, 105, 150)",
        cmyk: "cmyk(0, 54, 35, 10)",
      },
      {
        number: 200,
        className: "bg-rose-200",
        hex: "#F384A8",
        rgb: "rgb(243, 132, 168)",
        cmyk: "cmyk(0, 46, 31, 5)",
      },
      {
        number: 100,
        className: "bg-rose-100",
        hex: "#FBAFC2",
        rgb: "rgb(251, 175, 194)",
        cmyk: "cmyk(0, 30, 23, 2)",
      },
      {
        number: 50,
        className: "bg-rose-50",
        hex: "#FEEFF3",
        rgb: "rgb(254, 239, 243)",
        cmyk: "cmyk(0, 6, 4, 0)",
      },
    ],
  },
  {
    name: "Stone",
    variants: [
      {
        number: 900,
        className: "bg-stone-900",
        hex: "#3B4252",
        rgb: "rgb(59, 66, 82)",
        cmyk: "cmyk(28, 20, 0, 68)",
      },
      {
        number: 800,
        className: "bg-stone-800",
        hex: "#434C5E",
        rgb: "rgb(67, 76, 94)",
        cmyk: "cmyk(29, 19, 0, 63)",
      },
      {
        number: 700,
        className: "bg-stone-700",
        hex: "#4C576A",
        rgb: "rgb(76, 87, 106)",
        cmyk: "cmyk(29, 18, 0, 58)",
      },
      {
        number: 600,
        className: "bg-stone-600",
        hex: "#565F77",
        rgb: "rgb(86, 95, 119)",
        cmyk: "cmyk(28, 20, 0, 53)",
      },
      {
        number: 500,
        className: "bg-stone-500",
        hex: "#626B84",
        rgb: "rgb(98, 107, 132)",
        cmyk: "cmyk(26, 19, 0, 48)",
      },
      {
        number: 400,
        className: "bg-stone-400",
        hex: "#7E889B",
        rgb: "rgb(126, 136, 155)",
        cmyk: "cmyk(19, 12, 0, 39)",
      },
      {
        number: 300,
        className: "bg-stone-300",
        hex: "#9FA8BD",
        rgb: "rgb(159, 168, 189)",
        cmyk: "cmyk(16, 11, 0, 26)",
      },
      {
        number: 200,
        className: "bg-stone-200",
        hex: "#BFC7D2",
        rgb: "rgb(191, 199, 210)",
        cmyk: "cmyk(9, 5, 0, 18)",
      },
      {
        number: 100,
        className: "bg-stone-100",
        hex: "#DFE3E8",
        rgb: "rgb(223, 227, 232)",
        cmyk: "cmyk(4, 2, 0, 9)",
      },
      {
        number: 50,
        className: "bg-stone-50",
        hex: "#F5F6F7",
        rgb: "rgb(245, 246, 247)",
        cmyk: "cmyk(1, 0, 0, 3)",
      },
    ],
  },
  {
    name: "Neutral",
    variants: [
      {
        number: 900,
        className: "bg-neutral-900",
        hex: "#4A5568",
        rgb: "rgb(74, 85, 104)",
        cmyk: "cmyk(29, 18, 0, 59)",
      },
      {
        number: 800,
        className: "bg-neutral-800",
        hex: "#555B6E",
        rgb: "rgb(85, 91, 110)",
        cmyk: "cmyk(23, 17, 0, 57)",
      },
      {
        number: 700,
        className: "bg-neutral-700",
        hex: "#626978",
        rgb: "rgb(98, 105, 120)",
        cmyk: "cmyk(18, 12, 0, 53)",
      },
      {
        number: 600,
        className: "bg-neutral-600",
        hex: "#6E7585",
        rgb: "rgb(110, 117, 133)",
        cmyk: "cmyk(17, 12, 0, 48)",
      },
      {
        number: 500,
        className: "bg-neutral-500",
        hex: "#7A8291",
        rgb: "rgb(122, 130, 145)",
        cmyk: "cmyk(16, 10, 0, 43)",
      },
      {
        number: 400,
        className: "bg-neutral-400",
        hex: "#8D95A6",
        rgb: "rgb(141, 149, 166)",
        cmyk: "cmyk(15, 10, 0, 35)",
      },
      {
        number: 300,
        className: "bg-neutral-300",
        hex: "#A1A8BD",
        rgb: "rgb(161, 168, 189)",
        cmyk: "cmyk(15, 11, 0, 26)",
      },
      {
        number: 200,
        className: "bg-neutral-200",
        hex: "#B6BDD2",
        rgb: "rgb(182, 189, 210)",
        cmyk: "cmyk(13, 10, 0, 18)",
      },
      {
        number: 100,
        className: "bg-neutral-100",
        hex: "#CBD0E8",
        rgb: "rgb(203, 208, 232)",
        cmyk: "cmyk(13, 11, 0, 9)",
      },
      {
        number: 50,
        className: "bg-neutral-50",
        hex: "#E6E8F0",
        rgb: "rgb(230, 232, 240)",
        cmyk: "cmyk(4, 3, 0, 6)",
      },
    ],
  },
  {
    name: "Zinc",
    variants: [
      {
        number: 900,
        className: "bg-zinc-900",
        hex: "#2D3748",
        rgb: "rgb(45, 55, 72)",
        cmyk: "cmyk(38, 24, 0, 72)",
      },
      {
        number: 800,
        className: "bg-zinc-800",
        hex: "#353F4C",
        rgb: "rgb(53, 63, 76)",
        cmyk: "cmyk(30, 17, 0, 70)",
      },
      {
        number: 700,
        className: "bg-zinc-700",
        hex: "#3D4754",
        rgb: "rgb(61, 71, 84)",
        cmyk: "cmyk(27, 16, 0, 67)",
      },
      {
        number: 600,
        className: "bg-zinc-600",
        hex: "#454F5C",
        rgb: "rgb(69, 79, 92)",
        cmyk: "cmyk(25, 14, 0, 64)",
      },
      {
        number: 500,
        className: "bg-zinc-500",
        hex: "#4D5764",
        rgb: "rgb(77, 87, 100)",
        cmyk: "cmyk(23, 13, 0, 60)",
      },
      {
        number: 400,
        className: "bg-zinc-400",
        hex: "#657083",
        rgb: "rgb(101, 112, 131)",
        cmyk: "cmyk(23, 14, 0, 49)",
      },
      {
        number: 300,
        className: "bg-zinc-300",
        hex: "#7D8BA1",
        rgb: "rgb(125, 139, 161)",
        cmyk: "cmyk(22, 14, 0, 37)",
      },
      {
        number: 200,
        className: "bg-zinc-200",
        hex: "#959FB9",
        rgb: "rgb(149, 159, 185)",
        cmyk: "cmyk(19, 14, 0, 27)",
      },
      {
        number: 100,
        className: "bg-zinc-100",
        hex: "#ADB6D2",
        rgb: "rgb(173, 182, 210)",
        cmyk: "cmyk(18, 13, 0, 18)",
      },
      {
        number: 50,
        className: "bg-zinc-50",
        hex: "#C5CCDF",
        rgb: "rgb(197, 204, 223)",
        cmyk: "cmyk(11, 9, 0, 13)",
      },
    ],
  },
  {
    name: "Gray",
    variants: [
      {
        number: 900,
        className: "bg-gray-900",
        hex: "#1F2933",
        rgb: "rgb(31, 41, 51)",
        cmyk: "cmyk(39, 20, 0, 80)",
      },
      {
        number: 800,
        className: "bg-gray-800",
        hex: "#293742",
        rgb: "rgb(41, 55, 66)",
        cmyk: "cmyk(38, 17, 0, 74)",
      },
      {
        number: 700,
        className: "bg-gray-700",
        hex: "#30404F",
        rgb: "rgb(48, 64, 79)",
        cmyk: "cmyk(39, 19, 0, 69)",
      },
      {
        number: 600,
        className: "bg-gray-600",
        hex: "#384654",
        rgb: "rgb(56, 70, 84)",
        cmyk: "cmyk(33, 17, 0, 67)",
      },
      {
        number: 500,
        className: "bg-gray-500",
        hex: "#42505E",
        rgb: "rgb(66, 80, 94)",
        cmyk: "cmyk(30, 15, 0, 63)",
      },
      {
        number: 400,
        className: "bg-gray-400",
        hex: "#5E6B7D",
        rgb: "rgb(94, 107, 125)",
        cmyk: "cmyk(25, 15, 0, 51)",
      },
      {
        number: 300,
        className: "bg-gray-300",
        hex: "#7B8794",
        rgb: "rgb(123, 135, 148)",
        cmyk: "cmyk(17, 9, 0, 42)",
      },
      {
        number: 200,
        className: "bg-gray-200",
        hex: "#9AA5B1",
        rgb: "rgb(154, 165, 177)",
        cmyk: "cmyk(13, 7, 0, 31)",
      },
      {
        number: 100,
        className: "bg-gray-100",
        hex: "#B8C2CC",
        rgb: "rgb(184, 194, 204)",
        cmyk: "cmyk(10, 5, 0, 20)",
      },
      {
        number: 50,
        className: "bg-gray-50",
        hex: "#D9E2EC",
        rgb: "rgb(217, 226, 236)",
        cmyk: "cmyk(8, 4, 0, 7)",
      },
    ],
  },
  {
    name: "Slate",
    variants: [
      {
        number: 900,
        className: "bg-slate-900",
        hex: "#1A202C",
        rgb: "rgb(26, 32, 44)",
        cmyk: "cmyk(41, 27, 0, 83)",
      },
      {
        number: 800,
        className: "bg-slate-800",
        hex: "#252F3F",
        rgb: "rgb(37, 47, 63)",
        cmyk: "cmyk(41, 25, 0, 75)",
      },
      {
        number: 700,
        className: "bg-slate-700",
        hex: "#2E3A4D",
        rgb: "rgb(46, 58, 77)",
        cmyk: "cmyk(40, 24, 0, 70)",
      },
      {
        number: 600,
        className: "bg-slate-600",
        hex: "#384657",
        rgb: "rgb(56, 70, 87)",
        cmyk: "cmyk(36, 20, 0, 66)",
      },
      {
        number: 500,
        className: "bg-slate-500",
        hex: "#424D64",
        rgb: "rgb(66, 77, 100)",
        cmyk: "cmyk(34, 23, 0, 61)",
      },
      {
        number: 400,
        className: "bg-slate-400",
        hex: "#59647A",
        rgb: "rgb(89, 100, 122)",
        cmyk: "cmyk(27, 18, 0, 52)",
      },
      {
        number: 300,
        className: "bg-slate-300",
        hex: "#737F96",
        rgb: "rgb(115, 127, 150)",
        cmyk: "cmyk(23, 15, 0, 41)",
      },
      {
        number: 200,
        className: "bg-slate-200",
        hex: "#8F9AB3",
        rgb: "rgb(143, 154, 179)",
        cmyk: "cmyk(20, 14, 0, 30)",
      },
      {
        number: 100,
        className: "bg-slate-100",
        hex: "#ACB8D0",
        rgb: "rgb(172, 184, 208)",
        cmyk: "cmyk(17, 11, 0, 18)",
      },
      {
        number: 50,
        className: "bg-slate-50",
        hex: "#C8D1E4",
        rgb: "rgb(200, 209, 228)",
        cmyk: "cmyk(13, 9, 0, 11)",
      },
    ],
  },
];

import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [isColorCodeCopied, setIsColorCodeCopied] = useState(false); // Tracks if color code is copied
  const [focusedIndex, setFocusedIndex] = useState({ row: 9, col: 55 }); // Tracks the currently focused color button
  const colorButtonsRef = useRef([]); // Ref to store references of color buttons
  const [isButtonClicked, setIsButtonClicked] = useState(false); // Tracks if a color button is clicked

  // Function to handle copying color code to clipboard
  const handleCopyColorCode = ({ className, cmyk, hex, rgb }) => {
    setIsButtonClicked(true);

    // Delay to indicate button click
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 300);

    const colorCode = `
    Tailwind class:  ${className.substring(3)}, 
    CMYK Code: ${cmyk},
    HEX Color Code: ${hex},
    RGB Color Code ${rgb}
    `;

    navigator.clipboard
      .writeText(colorCode) // Removes the leading "bg-" from the color code
      .then(() => {
        setIsColorCodeCopied(true);
        // Delay to show "Copied" message
        setTimeout(() => {
          setIsColorCodeCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  // Function to handle keyboard navigation
  const handleKeyDown = (event, colorClassName, row, col) => {
    const { key } = event;
    const numRows = colors.length; // Number of rows in the color palette
    const numCols = colors[0].variants.length; // Number of columns in the color palette

    if (key === "Enter") {
      handleCopyColorCode(colorClassName); // Copy color code when Enter key is pressed
    } else if (key === "ArrowUp") {
      event.preventDefault();
      // Move the focus to the cell above the current cell
      setFocusedIndex((prevIndex) => {
        const newRow = prevIndex.row;
        const newCol = prevIndex.col > 0 ? prevIndex.col - 1 : numCols - 1;
        return { row: newRow, col: newCol };
      });
    } else if (key === "ArrowDown") {
      event.preventDefault();
      // Move the focus to the cell below the current cell
      setFocusedIndex((prevIndex) => {
        const newRow = prevIndex.row;
        const newCol = prevIndex.col < numCols - 1 ? prevIndex.col + 1 : 0;
        return { row: newRow, col: newCol };
      });
    } else if (key === "ArrowLeft") {
      event.preventDefault();
      // Move the focus to the cell on the left of the current cell
      setFocusedIndex((prevIndex) => {
        const newRow = prevIndex.row > 0 ? prevIndex.row - 1 : numRows - 1;
        const newCol = prevIndex.col;
        return { row: newRow, col: newCol };
      });
    } else if (key === "ArrowRight") {
      event.preventDefault();
      // Move the focus to the cell on the right of the current cell
      setFocusedIndex((prevIndex) => {
        const newRow = prevIndex.row < numRows - 1 ? prevIndex.row + 1 : 0;
        const newCol = prevIndex.col;
        return { row: newRow, col: newCol };
      });
    }
    // Handle other key events if needed
  };

  // Effect to focus the color button based on focusedIndex changes
  useEffect(() => {
    const colorButtons = colorButtonsRef.current;
    if (colorButtons && colorButtons.length > 0) {
      // Calculate the index of the button to focus based on focusedIndex
      const buttonIndex =
        focusedIndex.row * colors[0].variants.length + focusedIndex.col;
      const buttonToFocus = colorButtons[buttonIndex];

      if (buttonToFocus) {
        buttonToFocus.focus(); // Set focus on the button
      }
    }
  }, [focusedIndex]);

  return (
    <>
      {/* Header */}
      <header className="flex h-[10vh] flex-row w-full justify-between items-center">
        <div className="w-80 px-5 text-left font-bold">
          <span role="img" aria-label="Palette">
            🎨
          </span>{" "}
          Color Palettes
        </div>
        <div className="w-60 md:block hidden px-5 text-xs text-left font-bold">
          Use the keyboard to navigate and Enter to copy.
          <span role="img" aria-label="Clipboard">
            📝
          </span>
        </div>
      </header>

      {/* Main section */}
      <main className="flex h-full md:px-0 px-5 md:min-h-[80vh] w-full items-center justify-center">
        <section className="container w-full flex-wrap md:flex-row flex justify-center items-center pt-2">
          {/* Render color palettes */}
          {colors.map(({ name, variants }, row) => (
            <div key={name} className="w-12 md:pb-0 pb-10  m-0.5">
              <div className="w-12">
                <h1 className="text-xs flex font-poppins justify-center font-light items-center w-full">
                  {name}
                </h1>
              </div>
              {variants.map(({ className, number, cmyk, hex, rgb }, col) => (
                <button
                  // Assign a reference to each button element using the useRef hook
                  ref={(button) => {
                    colorButtonsRef.current[
                      row * colors[0].variants.length + col
                    ] = button;
                  }}
                  // Set the button type to "button"
                  type="button"
                  // Call the handleCopyColorCode function when the button is clicked
                  onClick={() =>
                    handleCopyColorCode({ className, cmyk, hex, rgb })
                  }
                  // Call the handleKeyDown function when a key is pressed down on the button
                  onKeyDown={(event) =>
                    handleKeyDown(event, className, row, col)
                  }
                  // Set the focused index state when the mouse enters the button
                  onMouseEnter={() => setFocusedIndex({ row, col })}
                  // Set the focused index state when the button receives focus
                  onFocus={() => setFocusedIndex({ row, col })}
                  // Reset the focused index state when the button loses focus
                  onBlur={() => setFocusedIndex({ row: -1, col: -1 })}
                  // Apply various CSS classes to the button based on different conditions
                  className={` w-12 h-12 m-0.5 group rounded-xl transition hover:scale-150 duration-300 ${className} shadow flex justify-center items-center text-center
                    ${
                      focusedIndex.row === row && focusedIndex.col === col
                        ? number < 400
                          ? "focus:ring-2 focus:ring-blue-400 scale-150"
                          : "focus:ring-2 focus:ring-blue-400 scale-150"
                        : ""
                    }
                    ${
                      isButtonClicked &&
                      "transition duration-300 scale-100 focus:scale-100"
                    }
                  `}
                  // Set a unique key for each button
                  key={`${name}-${number}`}
                  // Make the button focusable by setting a tabIndex of 0
                  tabIndex={0}
                >
                  <span
                    // Apply different CSS classes to the number span based on the variant number
                    className={`
                      ${
                        number > 400
                          ? "group-hover:block group-focus:block hidden text-white text-opacity-70 transition duration-300 font-bold"
                          : "group-hover:block group-focus:block hidden text-slate-600 text-opacity-70 transition duration-300 font-bold"
                      }
                    `}
                  >
                    {number}
                  </span>
                </button>
              ))}
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-row h-[10vh] w-full justify-between items-center">
        {isColorCodeCopied ? (
          <p className="w-full text-center font-bold">
            Tailwind Background Color Class Copied!{" "}
            <span role="img" aria-label="Checkmark">
              ✅
            </span>
          </p>
        ) : (
          <p className="w-full pb-1 text-center font-bold">
            <span role="img" aria-label="Peace Sign">
              ✌️
            </span>{" "}
            Made By
            <a
              className="underline pl-1"
              href="https://github.com/jayantrohila57"
            >
              Jayant Rohila
            </a>
          </p>
        )}
      </footer>
    </>
  );
}
