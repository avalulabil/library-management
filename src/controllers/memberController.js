const MemberService = require('../services/memberService');

class MemberController {
  static async borrowBook(req, res) {
    const { memberCode, bookCode } = req.body;
    try {
      const transaction = await MemberService.borrowBook(memberCode, bookCode);
      res.json(transaction);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async returnBook(req, res) {
    const { memberCode, bookCode } = req.body;
    try {
      const transaction = await MemberService.returnBook(memberCode, bookCode);
      res.json(transaction);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAllMembers(req, res) {
    try {
      const members = await MemberService.getAllMembers();
      res.json(members);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = MemberController;