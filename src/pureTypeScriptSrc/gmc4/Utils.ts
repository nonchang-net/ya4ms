// ユーティリティ
// - 恥ずかしながらビット演算に不慣れなので、自分でわかりにくい演算コードはユーティリティメソッドとユニットテストにくくり出していく。
export default class Utils{
	public static Test(): number{
		return 123;
	}

	public static RoundTo4Bit(num: number): number{
		return num &= ~0xfff0;
	}
}