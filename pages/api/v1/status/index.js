function status(request, response) {
  response.status(200).json({ Alunos: "São acima da média" });
}

export default status;
