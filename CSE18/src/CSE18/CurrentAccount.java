package CSE18;

public class CurrentAccount extends BankAccount{
CurrentAccount(String AccountHolder, long AccountNumber, double Balance){
	super(AccountHolder, AccountNumber, Balance);
}
@Override
void calculateInterest() {
	double interest = getBalance()*0.03;
	System.out.println(interest);
}
}
