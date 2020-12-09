// eslint-disable-next-line no-unused-vars
function initShader(gl, vertexShaderSource, fragmentShaderSource) {
  // 创建顶点着色器
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  // 创建片元着色器
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

  // 引入顶点片元着色器源代码
  gl.shaderSource(vertexShader, vertexShaderSource);
  gl.shaderSource(fragmentShader, fragmentShaderSource);

  // 编译顶点、片元着色器源
  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.useProgram(program);
  return program;
}
