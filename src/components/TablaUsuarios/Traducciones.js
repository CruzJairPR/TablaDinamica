// src/translations/dataGridEsES.js

export const dataGridEsES = {
  noRowsLabel: "No hay filas",
  noResultsOverlayLabel: "No se encontraron resultados",
  errorOverlayDefaultLabel: "Ha ocurrido un error",

  // Toolbar
  toolbarDensity: "Densidad",
  toolbarDensityLabel: "Densidad",
  toolbarDensityCompact: "Compacta",
  toolbarDensityStandard: "Estándar",
  toolbarDensityComfortable: "Cómoda",

  // Columns selector toolbar button text
  toolbarColumns: "Columnas",
  toolbarColumnsLabel: "Seleccionar columnas",
  // Agregar o modificar estas traducciones específicas de paginación
  MuiTablePagination: {
    labelRowsPerPage: "Filas por página:",
    labelDisplayedRows: ({ from, to, count }) =>
      `${from}-${to} de ${count !== -1 ? count : `más de ${to}`}`,
  },

  // Filters toolbar button text
  toolbarFilters: "Filtros",
  toolbarFiltersLabel: "Mostrar filtros",
  toolbarFiltersTooltipHide: "Ocultar filtros",
  toolbarFiltersTooltipShow: "Mostrar filtros",
  toolbarFiltersTooltipActive: (count) =>
    count > 1 ? `${count} filtros activos` : `${count} filtro activo`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: "Buscar…",
  toolbarQuickFilterLabel: "Buscar",
  toolbarQuickFilterDeleteIconLabel: "Limpiar",

  // Export selector toolbar button text
  toolbarExport: "Exportar",
  toolbarExportLabel: "Exportar",
  toolbarExportCSV: "Descargar como CSV",
  toolbarExportPrint: "Imprimir",
  toolbarExportExcel: "Descargar como Excel",

  // Columns panel text
  columnsPanelTextFieldLabel: "Buscar columna",
  columnsPanelTextFieldPlaceholder: "Título de columna",
  columnsPanelDragIconLabel: "Reordenar columna",
  columnsPanelShowAllButton: "Mostrar todo",
  columnsPanelHideAllButton: "Ocultar todo",

  // Filter panel text
  filterPanelAddFilter: "Agregar filtro",
  filterPanelRemoveAll: "Remover todos",
  filterPanelDeleteIconLabel: "Borrar",
  filterPanelLogicOperator: "Operador lógico",
  filterPanelOperator: "Operador",
  filterPanelOperatorAnd: "Y",
  filterPanelOperatorOr: "O",
  filterPanelColumns: "Columnas",
  filterPanelInputLabel: "Valor",
  filterPanelInputPlaceholder: "Valor de filtro",

  // Filter operators text
  filterOperatorContains: "contiene",
  filterOperatorEquals: "es igual",
  filterOperatorStartsWith: "comienza con",
  filterOperatorEndsWith: "termina con",
  filterOperatorIs: "es",
  filterOperatorNot: "no es",
  filterOperatorAfter: "es posterior",
  filterOperatorOnOrAfter: "es en o posterior",
  filterOperatorBefore: "es anterior",
  filterOperatorOnOrBefore: "es en o anterior",
  filterOperatorIsEmpty: "está vacío",
  filterOperatorIsNotEmpty: "no está vacío",
  filterOperatorIsAnyOf: "es cualquiera de",
  "filterOperator=": "=",
  "filterOperator!=": "!=",
  "filterOperator>": ">",
  "filterOperator>=": ">=",
  "filterOperator<": "<",
  "filterOperator<=": "<=",

  // Header filter operators text
  headerFilterOperatorContains: "Contiene",
  headerFilterOperatorEquals: "Es igual a",
  headerFilterOperatorStartsWith: "Comienza con",
  headerFilterOperatorEndsWith: "Termina con",
  headerFilterOperatorIs: "Es",
  headerFilterOperatorNot: "No es",
  headerFilterOperatorAfter: "Es posterior a",
  headerFilterOperatorOnOrAfter: "Es en o posterior a",
  headerFilterOperatorBefore: "Es anterior a",
  headerFilterOperatorOnOrBefore: "Es en o anterior a",
  headerFilterOperatorIsEmpty: "Está vacío",
  headerFilterOperatorIsNotEmpty: "No está vacío",
  headerFilterOperatorIsAnyOf: "Es cualquiera de",
  "headerFilterOperator=": "Es igual a",
  "headerFilterOperator!=": "No es igual a",
  "headerFilterOperator>": "Es mayor que",
  "headerFilterOperator>=": "Es mayor o igual que",
  "headerFilterOperator<": "Es menor que",
  "headerFilterOperator<=": "Es menor o igual que",

  // Filter values text
  filterValueAny: "cualquiera",
  filterValueTrue: "verdadero",
  filterValueFalse: "falso",

  // Column menu text
  columnMenuLabel: "Menú",
  columnMenuShowColumns: "Mostrar columnas",
  columnMenuManageColumns: "Administrar columnas",
  columnMenuFilter: "Filtro",
  columnMenuHideColumn: "Ocultar columna",
  columnMenuUnsort: "Desordenar",
  columnMenuSortAsc: "Ordenar ASC",
  columnMenuSortDesc: "Ordenar DESC",

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count > 1 ? `${count} filtros activos` : `${count} filtro activo`,
  columnHeaderFiltersLabel: "Mostrar filtros",
  columnHeaderSortIconLabel: "Ordenar",

  // Rows selected footer text
  footerRowSelected: (count) =>
    count > 1
      ? `${count.toLocaleString()} filas seleccionadas`
      : `${count.toLocaleString()} fila seleccionada`,

  // Total row amount footer text
  footerTotalRows: "Filas Totales:",

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: "Selección de casilla de verificación",
  checkboxSelectionSelectAllRows: "Seleccionar todas las filas",
  checkboxSelectionUnselectAllRows: "Deseleccionar todas las filas",
  checkboxSelectionSelectRow: "Seleccionar fila",
  checkboxSelectionUnselectRow: "Deseleccionar fila",

  // Boolean cell text
  booleanCellTrueLabel: "sí",
  booleanCellFalseLabel: "no",

  // Actions cell more text
  actionsCellMore: "más",

  // Column pinning text
  pinToLeft: "Anclar a la izquierda",
  pinToRight: "Anclar a la derecha",
  unpin: "Desanclar",

  // Tree Data
  treeDataGroupingHeaderName: "Grupo",
  treeDataExpand: "mostrar hijos",
  treeDataCollapse: "ocultar hijos",

  // Grouping columns
  groupingColumnHeaderName: "Grupo",
  groupColumn: (name) => `Agrupar por ${name}`,
  unGroupColumn: (name) => `No agrupar por ${name}`,

  // Master/detail
  detailPanelToggle: "Alternar panel de detalles",
  expandDetailPanel: "Expandir",
  collapseDetailPanel: "Contraer",

  // Row reordering text
  rowReorderingHeaderName: "Reordenar filas",

  // Aggregation
  aggregationMenuItemHeader: "Agregación",
  aggregationFunctionLabelSum: "sum",
  aggregationFunctionLabelAvg: "avg",
  aggregationFunctionLabelMin: "min",
  aggregationFunctionLabelMax: "max",
  aggregationFunctionLabelSize: "tamaño",
};
